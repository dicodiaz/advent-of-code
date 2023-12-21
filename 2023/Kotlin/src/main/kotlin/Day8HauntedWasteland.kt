typealias HauntedWastelandMap = Map<Char, MutableMap<String, String>>

fun main() {
  var instructions = charArrayOf()
  val map: HauntedWastelandMap = mapOf('L' to mutableMapOf(), 'R' to mutableMapOf())
  readInput("day8.txt") { line ->
    with(line) {
      when {
        toSortedSet() == setOf('L', 'R') -> instructions = line.toCharArray()
        contains('=') -> {
          val (start, left, right) = line.replace(
            Regex("(\\w+) = \\((\\w+), (\\w+)\\)"), "$1|$2|$3"
          ).split('|')
          map['L']?.set(start, left)
          map['R']?.set(start, right)
        }
        
        else -> 0
      }
    }
  }
  val hauntedWasteland = Day8HauntedWasteland(instructions, map)
  hauntedWasteland.part1()
  hauntedWasteland.part2()
}

class Day8HauntedWasteland(
  private val instructions: CharArray,
  private val map: HauntedWastelandMap,
) {
  fun part1() {
    var steps = 0
    var element = "AAA"
    var instructionsPointer = 0
    while (element != "ZZZ") {
      element = map[instructions[instructionsPointer]]?.get(element) ?: element
      instructionsPointer = (instructionsPointer + 1) % instructions.size
      steps++
    }
    println(steps)
  }
  
  fun part2() {
    val elements = map['L']?.keys?.filter { it.endsWith('A') } ?: listOf()
    val stepsList = MutableList(elements.size) { 0 }
    elements.forEachIndexed { index, it ->
      var element = it
      var steps = 0
      var instructionsPointer = 0
      while (!element.endsWith('Z')) {
        element = map[instructions[instructionsPointer]]?.get(element) ?: element
        instructionsPointer = (instructionsPointer + 1) % instructions.size
        steps++
      }
      stepsList[index] = steps
    }
    println(getLCM(stepsList))
  }
  
  private fun getLCM(nList: List<Int>): Long {
    return nList.map { getPrimeFactors(it) }.flatten().toSet()
      .fold(1L) { lcm, primeFactor -> lcm * primeFactor }
  }
  
  private fun getPrimeFactors(n: Int): List<Int> {
    if (n <= 1) return listOf()
    if (n == 2) return listOf(2)
    val primeFactors = mutableListOf<Int>()
    if (n % 2 == 0) primeFactors.add(2)
    primeFactors.addAll((3..n / 2 step 2).filter { n % it == 0 })
    return primeFactors
  }
}
