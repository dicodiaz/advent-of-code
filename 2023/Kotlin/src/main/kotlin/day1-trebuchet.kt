fun main() {
  val input = readInput("day1.txt", null).toArray(arrayOf<String>())
  println(trebuchet(input))
}

fun trebuchet(input: Array<String>): Int {
  return input.fold(0) { result, elem ->
    val firstAndLastDigits = arrayOf(0, 0)
    var isFirst = true
    elem.map {
      if (it.isDigit()) {
        if (isFirst) {
          firstAndLastDigits[0] = it.digitToInt()
          isFirst = false
        }
        firstAndLastDigits[1] = it.digitToInt()
      }
    }
    return@fold result + firstAndLastDigits[0] * 10 + firstAndLastDigits[1]
  }
}