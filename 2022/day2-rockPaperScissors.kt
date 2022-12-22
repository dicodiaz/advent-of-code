import java.io.File

fun readInput(file: String, callback: ((line: String) -> Any)?): ArrayList<Any> {
  val input = ArrayList<Any>()
  File(file).reader().forEachLine { line ->
    val newLine = callback?.let { callback(line) } ?: line
    input.add(newLine)
  }
  return input
}

fun main() {
  val input = readInput("inputs/day2.txt", null).toArray(arrayOf<String>())
  val roundScoreMap =
      mapOf(
          "A X" to 1 + 3,
          "A Y" to 2 + 6,
          "A Z" to 3 + 0,
          "B X" to 1 + 0,
          "B Y" to 2 + 3,
          "B Z" to 3 + 6,
          "C X" to 1 + 6,
          "C Y" to 2 + 0,
          "C Z" to 3 + 3
      )
  val roundScoreMapPart2 =
      mapOf(
          "A X" to 3 + 0,
          "A Y" to 1 + 3,
          "A Z" to 2 + 6,
          "B X" to 1 + 0,
          "B Y" to 2 + 3,
          "B Z" to 3 + 6,
          "C X" to 2 + 0,
          "C Y" to 3 + 3,
          "C Z" to 1 + 6
      )
  println(rockPaperScissors(input, roundScoreMap))
  println(rockPaperScissors(input, roundScoreMapPart2))
}

fun rockPaperScissors(input: Array<String>, roundScoreMap: Map<String, Int>): Int {
  return input.fold(0) { result, round ->
    val score = roundScoreMap.get(round) ?: 0
    return@fold result + score
  }
}
