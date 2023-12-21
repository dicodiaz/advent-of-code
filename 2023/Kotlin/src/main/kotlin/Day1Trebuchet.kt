fun main() {
  val input = readInput("day1.txt") { it }
  val trebuchet = Day1Trebuchet(input)
  trebuchet.part1()
  trebuchet.part2()
}

class Day1Trebuchet(
  private val input: List<String>,
) {
  private val digitNamesToDigits = mapOf(
    "one" to "1",
    "two" to "2",
    "three" to "3",
    "four" to "4",
    "five" to "5",
    "six" to "6",
    "seven" to "7",
    "eight" to "8",
    "nine" to "9"
  )
  private val digitNames = digitNamesToDigits.keys
  private val digits = digitNamesToDigits.values
  
  fun part1() {
    val result = input.fold(0) { result, elem ->
      val firstAndLastDigitPairs = getFirstAndLastDigitPairs(elem)
      val firstDigit = firstAndLastDigitPairs[0]!!.second.toInt()
      val lastDigit = firstAndLastDigitPairs[1]!!.second.toInt()
      result + firstDigit * 10 + lastDigit
    }
    println(result)
  }
  
  fun part2() {
    val result = input.fold(0) { result, elem ->
      val firstAndLastDigitPairs = getFirstAndLastDigitPairs(elem)
      val firstAndLastDigitNamePairs = getFirstAndLastDigitNamePairs(elem)
      var firstDigit = firstAndLastDigitPairs[0]?.second?.toInt()
      if (firstAndLastDigitPairs[0] != null && firstAndLastDigitNamePairs[0] != null) {
        if (firstAndLastDigitNamePairs[0]!!.first < firstAndLastDigitPairs[0]!!.first) {
          firstDigit = digitNamesToDigits[firstAndLastDigitNamePairs[0]!!.second]!!.toInt()
        }
      } else if (firstAndLastDigitNamePairs[0] != null) {
        firstDigit = digitNamesToDigits[firstAndLastDigitNamePairs[0]!!.second]!!.toInt()
      }
      var lastDigit = firstAndLastDigitPairs[1]?.second?.toInt()
      if (firstAndLastDigitPairs[1] != null && firstAndLastDigitNamePairs[1] != null) {
        if (firstAndLastDigitNamePairs[1]!!.first > firstAndLastDigitPairs[1]!!.first) {
          lastDigit = digitNamesToDigits[firstAndLastDigitNamePairs[1]!!.second]!!.toInt()
        }
      } else if (firstAndLastDigitNamePairs[1] != null) {
        lastDigit = digitNamesToDigits[firstAndLastDigitNamePairs[1]!!.second]!!.toInt()
      }
      result + firstDigit!! * 10 + lastDigit!!
    }
    println(result)
  }
  
  private fun getFirstAndLastDigitPairs(str: String): Array<Pair<Int, String>?> {
    return arrayOf(str.findAnyOf(digits), str.findLastAnyOf(digits))
  }
  
  private fun getFirstAndLastDigitNamePairs(str: String): Array<Pair<Int, String>?> {
    return arrayOf(str.findAnyOf(digitNames), str.findLastAnyOf(digitNames))
  }
}
