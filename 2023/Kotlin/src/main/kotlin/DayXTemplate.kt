fun main() {
  val input = readInput("day1.txt") { it }
  val template = DayXTemplate(input)
  template.part1()
  template.part2()
}

class DayXTemplate(
  private val input: List<String>,
) {
  fun part1() {
    println(input)
  }
  
  fun part2() {
  }
}
