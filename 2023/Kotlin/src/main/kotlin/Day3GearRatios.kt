fun main() {
  val input = readInput("day3.txt") { it.split("").filterNot { it.isEmpty() } }
  val gearRatios = Day3GearRatios(input)
  gearRatios.part1()
  gearRatios.part2()
}

class Day3GearRatios(private val input: List<List<String>>) {
  val directions = listOf(Pair(-1, -1), Pair(-1, 0), Pair(-1, 1), Pair(0, -1), Pair(0, 0), Pair(0, 1), Pair(1, -1), Pair(1, 0), Pair(1, 1))
  fun part1() {
    var partNumbers = mutableListOf<Int>()
    var row = 0
    while (row < input.size) {
      var col = 0
      while (col < input[row].size) {
        var value = ""
        val firstCol = col
        while (col < input[row].size && input[row][col].toIntOrNull() != null) {
          value += input[row][col++]
        }
        if (col > firstCol) {
          var isPartNumber = false
          for (i in firstCol..<col) {
            if (directions.any { direction ->
                val newRow = row + direction.first
                val newCol = i + direction.second
                if (newRow < 0 || newRow >= input.size || newCol < 0 || newCol >= input[newRow].size) {
                  return@any false
                }
                input[newRow][newCol] != "." && input[newRow][newCol].toIntOrNull() == null
              }) {
              isPartNumber = true
              break
            }
          }
          if (isPartNumber) {
            partNumbers.add(value.toInt())
          }
        }
        col++
      }
      row++
    }
    println(partNumbers.sum())
  }

  fun part2() {
  }
}