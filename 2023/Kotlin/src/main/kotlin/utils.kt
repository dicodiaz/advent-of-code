import java.io.File

fun <T> readInput(file: String, callback: (line: String) -> T): List<T> {
  val input = mutableListOf<T>()
  File("src/main/inputs/$file").reader().forEachLine { line ->
    val newLine = callback(line)
    input.add(newLine)
  }
  return input.toList()
}