import kotlin.math.abs

fun main() {
  val space = readInput("day11.txt", String::toCharArray)
  val cosmicExpansion = Day11CosmicExpansion(space)
  cosmicExpansion.part1()
  cosmicExpansion.part2()
}

class Day11CosmicExpansion(
  private val space: List<CharArray>,
) {
  fun part1() {
    val emptySpace = getEmptySpace()
    val spaceCopy = space.map(CharArray::copyOf).toMutableList()
    updateSpace(spaceCopy, emptySpace)
    val galaxies = getGalaxies(spaceCopy)
    var shortestPathSum = 0
    galaxies.forEachIndexed { indexA, galaxyA ->
      for (indexB in indexA + 1..<galaxies.size) {
        val galaxyB = galaxies[indexB]
        val rowDistance = abs(galaxyB.first - galaxyA.first)
        val colDistance = abs(galaxyB.second - galaxyA.second)
        shortestPathSum += rowDistance + colDistance
      }
    }
    println(shortestPathSum)
  }
  
  fun part2() {
    val (emptyRows, emptyCols) = getEmptySpace()
    val spaceCopy = space.map(CharArray::copyOf).toMutableList()
    val galaxies = getGalaxies(spaceCopy)
    val timesLarger = 1000000
    var shortestPathSum = 0L
    galaxies.forEachIndexed { indexA, galaxyA ->
      for (indexB in indexA + 1..<galaxies.size) {
        val galaxyB = galaxies[indexB]
        val rowRange =
          galaxyA.first.coerceAtMost(galaxyB.first)..<galaxyA.first.coerceAtLeast(galaxyB.first)
        val colRange =
          galaxyA.second.coerceAtMost(galaxyB.second)..<galaxyA.second.coerceAtLeast(galaxyB.second)
        val emptyRowsCrossed = emptyRows.filter { it in rowRange }.size
        val emptyColsCrossed = emptyCols.filter { it in colRange }.size
        val rowDistance = abs(galaxyB.first - galaxyA.first) + emptyRowsCrossed * (timesLarger - 1)
        val colDistance =
          abs(galaxyB.second - galaxyA.second) + emptyColsCrossed * (timesLarger - 1)
        shortestPathSum += rowDistance + colDistance
      }
    }
    println(shortestPathSum)
  }
  
  private fun getEmptySpace(): Pair<List<Int>, List<Int>> {
    val emptyRows = getEmptyRows(space)
    val emptyCols = getEmptyRows(getTranspose())
    return Pair(emptyRows, emptyCols)
  }
  
  private fun getEmptyRows(space: List<CharArray>): List<Int> {
    return space.mapIndexed { row, chars ->
      if (chars.distinct() == listOf('.')) {
        return@mapIndexed row
      }
      return@mapIndexed null
    }.filterNotNull()
  }
  
  private fun getTranspose(): List<CharArray> {
    val transpose = List(space[0].size) { CharArray(space.size) }
    space.forEachIndexed { row, chars ->
      chars.forEachIndexed { col, char ->
        transpose[col][row] = char
      }
    }
    return transpose
  }
  
  private fun updateSpace(
    space: MutableList<CharArray>,
    emptySpace: Pair<List<Int>, List<Int>>,
    timesLarger: Int = 2,
  ) {
    val (emptyRows, emptyCols) = emptySpace
    space.mapInPlace { chars ->
      val newChars = chars.toMutableList()
      for (index in emptyCols.size - 1 downTo 0) {
        val emptyCol = emptyCols[index]
        newChars.addAll(emptyCol, List(timesLarger - 1) { newChars[emptyCol] })
      }
      return@mapInPlace newChars.toCharArray()
    }
    for (index in emptyRows.size - 1 downTo 0) {
      val emptyRow = emptyRows[index]
      space.addAll(emptyRow, List(timesLarger - 1) { space[emptyRow] })
    }
  }
  
  private fun getGalaxies(space: List<CharArray>): List<Pair<Int, Int>> {
    val galaxies = mutableListOf<Pair<Int, Int>>()
    space.forEachIndexed { row, chars ->
      chars.forEachIndexed { col, char ->
        if (char == '#') {
          galaxies.add(Pair(row, col))
        }
      }
    }
    return galaxies
  }
}
