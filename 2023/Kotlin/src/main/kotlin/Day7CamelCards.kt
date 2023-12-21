fun main() {
  val input = readInput("day7.txt") { line ->
    val split = line.split(" ")
    Hand(split[0], split[1].toInt())
  }
  val camelCards = Day7CamelCards(input)
  camelCards.part1()
  camelCards.part2()
}

class Hand(val value: String, val bid: Int) {
  var type = 0
  var typeWithJoker = 0
  
  init {
    type = getType(value)
    typeWithJoker = getType(value, withJoker = true)
  }
  
  override fun toString(): String {
    return "(value: $value, bid: $bid, type: $type, typeWithJoker: $typeWithJoker)"
  }
  
  private fun getType(hand: String, withJoker: Boolean = false): Int {
    val cardToCount = getCardToCount(hand)
    if (withJoker && cardToCount['J'] != null) {
      val jCount = cardToCount.remove('J') ?: 0
      val maxCountCard = cardToCount.toList().maxByOrNull { it.second }?.first ?: 'A'
      cardToCount[maxCountCard] = (cardToCount[maxCountCard] ?: 0) + jCount
    }
    
    return when (cardToCount.values.sorted()) {
      listOf(1, 1, 1, 1, 1) -> 1
      listOf(1, 1, 1, 2) -> 2
      listOf(1, 2, 2) -> 3
      listOf(1, 1, 3) -> 4
      listOf(2, 3) -> 5
      listOf(1, 4) -> 6
      listOf(5) -> 7
      else -> -1
    }
  }
  
  private fun getCardToCount(hand: String): MutableMap<Char, Int> {
    val cardToCount = mutableMapOf<Char, Int>()
    for (char in hand) {
      cardToCount[char] = (cardToCount[char] ?: 0) + 1
    }
    return cardToCount
  }
}

class Day7CamelCards(
  private val input: List<Hand>,
) {
  private val cardToStrength = mapOf(
    '2' to 2,
    '3' to 3,
    '4' to 4,
    '5' to 5,
    '6' to 6,
    '7' to 7,
    '8' to 8,
    '9' to 9,
    'T' to 10,
    'J' to 11,
    'Q' to 12,
    'K' to 13,
    'A' to 14
  )
  private val cardToStrengthWithJoker = mapOf(
    'J' to 1,
    '2' to 2,
    '3' to 3,
    '4' to 4,
    '5' to 5,
    '6' to 6,
    '7' to 7,
    '8' to 8,
    '9' to 9,
    'T' to 10,
    'Q' to 12,
    'K' to 13,
    'A' to 14
  )
  
  fun part1() {
    val handComparator = getHandComparator()
    val sortedInput = input.sortedWith(handComparator)
    val sum = sortedInput.foldIndexed(0) { index, sum, hand -> sum + hand.bid * (index + 1) }
    println(sum)
  }
  
  fun part2() {
    val handComparator = getHandComparator(withJoker = true)
    val sortedInput = input.sortedWith(handComparator)
    val sum = sortedInput.foldIndexed(0) { index, sum, hand -> sum + hand.bid * (index + 1) }
    println(sum)
  }
  
  private fun getHandComparator(withJoker: Boolean = false): Comparator<Hand> {
    return Comparator { a, b ->
      val typeA = if (withJoker) a.typeWithJoker else a.type
      val typeB = if (withJoker) b.typeWithJoker else b.type
      if (typeA > typeB) {
        1
      } else if (typeB > typeA) {
        -1
      } else {
        a.value.toCharArray().forEachIndexed { index, cardA ->
          val cardB = b.value[index]
          val strengthA =
            (if (withJoker) cardToStrengthWithJoker[cardA] else cardToStrength[cardA]) ?: 0
          val strengthB =
            (if (withJoker) cardToStrengthWithJoker[cardB] else cardToStrength[cardB]) ?: 0
          if (strengthA > strengthB) {
            return@Comparator 1
          } else if (strengthB > strengthA) {
            return@Comparator -1
          }
        }
        0
      }
    }
  }
}
