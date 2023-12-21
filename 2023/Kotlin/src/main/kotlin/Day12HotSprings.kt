import kotlin.system.measureTimeMillis

fun main() {
  val input = readInput("day12.txt") { line ->
    val (rawArrangement, rawDamagedCountList) = line.split(' ')
    ConditionRecord(rawArrangement.toCharArray(), rawDamagedCountList.split(',').map(String::toInt))
  }
  val hotSprings = Day12HotSprings(input)
  hotSprings.part1()
  val timeInMillis = measureTimeMillis {
    hotSprings.part2()
  }
  println("time in milliseconds for part 2: $timeInMillis")
}

class ConditionRecord(private val arrangement: CharArray, private val damagedCountList: List<Int>) {
  operator fun component1(): CharArray {
    return arrangement
  }
  
  operator fun component2(): List<Int> {
    return damagedCountList
  }
  
  override fun toString(): String {
    return "arrangement: ${String(arrangement)}, damagedCountList: $damagedCountList"
  }
}

class SpringCount(var type: Char, var count: Int) {
  override fun toString(): String {
    return "type: $type, count: $count"
  }
}

class Day12HotSprings(
  private val input: List<ConditionRecord>,
) {
  private var arrangementsCount = 0L
  
  fun part1() {
    input.forEach { (arrangement, damagedCountList) ->
      getArrangements(arrangement, damagedCountList)
    }
    println(arrangementsCount)
  }
  
  fun part2() {
    input.forEachIndexed { index, (arrangement, damagedCountList) ->
      arrangementsCount = 0
      val unfoldedArrangement = List(5) { String(arrangement) }.joinToString("?").toCharArray()
      val unfoldedDamagedCountList = List(5) { damagedCountList }.flatten()
      println("${index + 1}. ${String(unfoldedArrangement)} $unfoldedDamagedCountList")
      getArrangements(unfoldedArrangement, unfoldedDamagedCountList)
    }
    println(arrangementsCount)
  }
  
  private fun getArrangements(
    arrangement: CharArray,
    damagedCountList: List<Int>,
    index: Int = 0,
    springCountList: MutableList<SpringCount> = mutableListOf(),
  ) {
//    println("${String(arrangement)} $index")
//    println(springCountList)
    if (index == arrangement.size) {
      if (damagedCountList == getDamagedCountList(springCountList)) {
        arrangementsCount++
      }
      return
    }
    val arrangementCopy = arrangement.copyOf()
    var newSpringCountList = springCountList.map { SpringCount(it.type, it.count) }.toMutableList()
    when (arrangement[index]) {
      '?' -> {
        arrangementCopy[index] = '#'
        with(newSpringCountList) {
          when {
            isEmpty() -> add(SpringCount('#', 1))
            last().type == '#' -> last().count += 1
            last().type == '.' -> add(SpringCount('#', 1))
            else -> {}
          }
        }
        if (damagedCountList.startsWith(getDamagedCountList(newSpringCountList), true)) {
          getArrangements(arrangementCopy, damagedCountList, index + 1, newSpringCountList)
        }
        newSpringCountList = springCountList.map { SpringCount(it.type, it.count) }.toMutableList()
        arrangementCopy[index] = '.'
        with(newSpringCountList) {
          when {
            isEmpty() -> add(SpringCount('.', 1))
            last().type == '.' -> last().count += 1
            last().type == '#' -> add(SpringCount('.', 1))
            else -> {}
          }
        }
        if (damagedCountList.startsWith(getDamagedCountList(newSpringCountList), true)) {
          getArrangements(arrangementCopy, damagedCountList, index + 1, newSpringCountList)
        }
      }
      
      '#' -> {
        with(newSpringCountList) {
          when {
            isEmpty() -> add(SpringCount('#', 1))
            last().type == '#' -> last().count += 1
            last().type == '.' -> add(SpringCount('#', 1))
            else -> {}
          }
        }
        getArrangements(arrangementCopy, damagedCountList, index + 1, newSpringCountList)
      }
      
      '.' -> {
        with(newSpringCountList) {
          when {
            isEmpty() -> add(SpringCount('.', 1))
            last().type == '.' -> last().count += 1
            last().type == '#' -> add(SpringCount('.', 1))
            else -> {}
          }
        }
        getArrangements(arrangementCopy, damagedCountList, index + 1, newSpringCountList)
      }
    }
  }
  
  private fun getDamagedCountList(springCountList: List<SpringCount>): List<Int> {
    return springCountList.filter { it.type == '#' }.map(SpringCount::count)
  }
}
