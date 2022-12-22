import java.io.File

fun readInput(file: String, callback: ((line: String) -> Any)?): ArrayList<Any> {
  val input = ArrayList<Any>()
  File("src/main/inputs/$file").reader().forEachLine { line ->
    val newLine = callback?.let { callback(line) } ?: line
    input.add(newLine)
  }
  return input
}