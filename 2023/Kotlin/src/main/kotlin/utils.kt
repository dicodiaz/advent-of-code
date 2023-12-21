import java.io.File

fun <T> readInput(file: String, callback: (line: String) -> T): List<T> {
  val input = mutableListOf<T>()
  File("src/main/inputs/$file").reader().forEachLine { line ->
    val newLine = callback(line)
    input.add(newLine)
  }
  return input.toList()
}

fun <T> MutableList<T>.mapInPlace(transform: (T) -> T) {
  for (i in this.indices) {
    this[i] = transform(this[i])
  }
}

fun List<Int>.startsWith(list: List<Int>, lowerLast: Boolean = false): Boolean {
  if (list.size > size) return false
  list.forEachIndexed { i, elem ->
    if (i == list.size - 1 && lowerLast) {
      return elem <= this[i]
    }
    if (elem != this[i]) {
      return false
    }
  }
  return true
}
