fun main() {
  val input = readInput("day4.txt") { line ->
    Pair(line.replace(Regex("^Card( |\\d)+: +(.+) \\| +(.+)\$"), "$2"), line.replace(Regex("^Card( |\\d)+: +(.+) \\| +(.+)\$"), "$3"))
  }
  val scratchcards = Day4Scratchcards(input)
  scratchcards.part1()
  scratchcards.part2()
}

class Day4Scratchcards(private val input:  List<Pair<String, String>>) {
  fun part1() {
    var score = 0
    for (pair in input) {
      val winningNumbers = pair.first.split(Regex(" +"))
      val myNumbers = pair.second.split(Regex(" +"))
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
    val cardCountList = MutableList(input.size) { 1 }
    input.forEachIndexed { index, pair ->
      val winningNumbers = pair.first.split(Regex(" +"))
      val myNumbers = pair.second.split(Regex(" +"))
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