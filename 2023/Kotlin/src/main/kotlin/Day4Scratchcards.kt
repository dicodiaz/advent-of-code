fun main() {
  val input = readInput("day4.txt") { line ->
    val (winningNumbers, myNumbers) = line.replace(
      Regex("^Card( |\\d)+: +(.+) \\| +(.+)\$"), "$2|$3"
    ).split(Regex("\\|")).map { it.split(Regex(" +")) }
    Scratchcard(winningNumbers, myNumbers)
  }
  val scratchcards = Day4Scratchcards(input)
  scratchcards.part1()
  scratchcards.part2()
}

class Scratchcard(private val winningNumbers: List<String>, private val myNumbers: List<String>) {
  operator fun component1(): List<String> {
    return winningNumbers
  }
  
  operator fun component2(): List<String> {
    return myNumbers
  }
}

class Day4Scratchcards(
  private val scratchcards: List<Scratchcard>,
) {
  fun part1() {
    var score = 0
    for ((winningNumbers, myNumbers) in scratchcards) {
      var points = 0
      for (num in myNumbers) {
        if (winningNumbers.contains(num)) {
          points += if (points == 0) 1 else points
        }
      }
      score += points
    }
    println(score)
  }
  
  fun part2() {
    val cardCountList = MutableList(scratchcards.size) { 1 }
    scratchcards.forEachIndexed { index, (winningNumbers, myNumbers) ->
      var offset = 0
      for (num in myNumbers) {
        if (winningNumbers.contains(num)) {
          cardCountList[index + ++offset] += cardCountList[index]
        }
      }
    }
    println(cardCountList.sum())
  }
}
