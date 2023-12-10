fun main() {
  val input = readInput("day3.txt") { it.toCharArray() }
  val gearRatios = Day3GearRatios(input)
  gearRatios.part1()
  gearRatios.part2()
}

class Day3GearRatios(private val input: List<CharArray>) {
  val directions = listOf(Pair(-1, -1), Pair(-1, 0), Pair(-1, 1), Pair(0, -1), Pair(0, 1), Pair(1, -1), Pair(1, 0), Pair(1, 1))

  fun part1() {
    val partNumbers = mutableListOf<Int>()
    var row = 0
    while (row < input.size) {
      var col = 0
      while (col < input[row].size) {
        var value = ""
        val firstCol = col
        while (col < input[row].size && input[row][col].isDigit()) {
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
                input[newRow][newCol] != '.' && !input[newRow][newCol].isDigit()
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
    val gearRatios = mutableListOf<Int>()
    var row = 0
    while (row < input.size) {
      var col = 0
      while (col < input[row].size) {
        val values = mutableListOf<Int>()
        if (input[row][col] == '*') {
          val visited = mutableListOf<Pair<Int, Int>>()
          directions.forEach { direction ->
            val newRow = row + direction.first
            val newCol = col + direction.second
            if (newRow < 0 || newRow >= input.size || newCol < 0 || newCol >= input[newRow].size
              || visited.contains(Pair(newRow, newCol))) {
              return@forEach
            }
            if (input[newRow][newCol].isDigit()) {
              var value = "" + input[newRow][newCol]
              var newCol2 = newCol - 1
              while (newCol2 >= 0 && input[newRow][newCol2].isDigit()) {
                value = input[newRow][newCol2] + value
                visited.add(Pair(newRow, newCol2--))
              }
              newCol2 = newCol + 1
              while (newCol2 < input[newRow].size && input[newRow][newCol2].isDigit()) {
                value += input[newRow][newCol2]
                visited.add(Pair(newRow, newCol2++))
              }
              values.add(value.toInt())
            }
          }
          if (values.size == 2) {
            gearRatios.add(values.reduce(Int::times))
          }
        }
        col++
      }
      row++
    }
    println(gearRatios.sum())
  }
}