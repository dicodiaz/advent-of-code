fun main() {
  val input = mutableListOf<Pair<String, String>>()
  readInput("day6.txt") { line ->
    with(line) {
      when {
        contains("Time") -> {
          line.split(Regex(": +"))[1].split(Regex(" +"))
            .forEach { time -> input.add(Pair(time, "")) }
        }
        
        contains("Distance") -> {
          line.split(Regex(": +"))[1].split(Regex(" +")).forEachIndexed { index, distance ->
            input[index] = input[index].copy(second = distance)
          }
        }
      }
    }
  }
  val waitForIt = Day6WaitForIt(input)
  waitForIt.part1()
  waitForIt.part2()
}

class Day6WaitForIt(
  private val input: MutableList<Pair<String, String>>,
) {
  fun part1() {
    var product = 1
    input.forEach { race ->
      val time = race.first.toInt()
      val distance = race.second.toInt()
      var sum = 0
      for (i in 1..<time) {
        if (i * (time - i) > distance) {
          sum++
        }
      }
      product *= sum
    }
    println(product)
  }
  
  fun part2() {
    val longRace = input.reduce { longRace, race ->
      longRace.copy(
        longRace.first + race.first, longRace.second + race.second
      )
    }
    val time = longRace.first.toLong()
    val distance = longRace.second.toLong()
    var sum = 0
    for (i in 1..<time) {
      if (i * (time - i) > distance) {
        sum++
      }
    }
    println(sum)
  }
}
