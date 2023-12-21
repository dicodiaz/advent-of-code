fun main() {
  val maze = readInput("day10.txt") { it.toCharArray() }
  val pipeMaze = Day10PipeMaze(maze)
  pipeMaze.part1()
  pipeMaze.part2()
}

class PipeMazeVisited(private val position: Pair<Int, Int>, private val distance: Int) {
  operator fun component1(): Pair<Int, Int> {
    return position
  }
  
  operator fun component2(): Int {
    return distance
  }
  
  override fun toString(): String {
    return "position: $position, distance: $distance"
  }
}

class Day10PipeMaze(
  private val maze: List<CharArray>,
) {
  private val startingPipe: Char
  private val startingPosition: Pair<Int, Int>
  private val visited = mutableListOf<PipeMazeVisited>()
  private val pendingVisits = mutableListOf<PipeMazeVisited>()
  private val cardinalsToDirections = mapOf(
    'N' to Pair(-1, 0), 'E' to Pair(0, 1), 'S' to Pair(1, 0), 'W' to Pair(0, -1)
  )
  private val directions = cardinalsToDirections.values
  private val pipesToDirectionLists = mapOf(
    '|' to listOf(cardinalsToDirections['N']!!, cardinalsToDirections['S']!!),
    '-' to listOf(cardinalsToDirections['E']!!, cardinalsToDirections['W']!!),
    'L' to listOf(cardinalsToDirections['N']!!, cardinalsToDirections['E']!!),
    'J' to listOf(cardinalsToDirections['N']!!, cardinalsToDirections['W']!!),
    '7' to listOf(cardinalsToDirections['S']!!, cardinalsToDirections['W']!!),
    'F' to listOf(cardinalsToDirections['E']!!, cardinalsToDirections['S']!!),
  )
  
  init {
    var col = -1
    val row = maze.indexOfFirst { row ->
      col = row.indexOf('S')
      col != -1
    }
    startingPosition = Pair(row, col)
    startingPipe = getStartingPipe()
  }
  
  fun part1() {
    visited.add(PipeMazeVisited(startingPosition, 0))
    var nextDirections = pipesToDirectionLists[startingPipe]
    nextDirections?.forEach { direction ->
      val nextRow = startingPosition.first + direction.first
      val nextCol = startingPosition.second + direction.second
      pendingVisits.add(PipeMazeVisited(Pair(nextRow, nextCol), 1))
    }
    while (pendingVisits.isNotEmpty()) {
      val nextVisit = pendingVisits.removeFirst()
      val (position, distance) = nextVisit
      val nextPipe = maze[position.first][position.second]
      nextDirections = pipesToDirectionLists[nextPipe]
      nextDirections?.forEach { direction ->
        val nextRow = position.first + direction.first
        val nextCol = position.second + direction.second
        if (visited.all { (position) ->
            position != Pair(nextRow, nextCol)
          } && pendingVisits.all { (position) -> position != Pair(nextRow, nextCol) }) {
          pendingVisits.add(PipeMazeVisited(Pair(nextRow, nextCol), distance + 1))
        }
      }
      visited.add(nextVisit)
    }
    println(visited.last().component2())
  }
  
  // TODO: This does not work, I still have to consider that "squeezing between pipes is also allowed"
  fun part2() {
    val mazeCopy = maze.map(CharArray::copyOf)
    visited.forEach { (position) ->
      val (row, col) = position
      mazeCopy[row][col] = 'C'
    }
    mazeCopy[0][0] = 'O'
    var enclosedCount = 0
    repeat(3) { index ->
      if (index == 2) {
        mazeCopy.forEachIndexed { row, chars ->
          chars.forEachIndexed { col, char ->
            when (char) {
              'C' -> {
                print(maze[row][col])
              }
              
              'O' -> {
                print(char)
              }
              
              else -> {
                val insideChar = 'I'
                mazeCopy[row][col] = insideChar
                enclosedCount++
                print(insideChar)
              }
            }
          }
          println("")
        }
      } else {
        mazeCopy.forEachIndexed { row, chars ->
          chars.forEachIndexed { col, char ->
            if (char != 'C' && char != 'O') {
              val isOutside = directions.any { direction ->
                var nextRow = row
                var nextCol = col
                while (mazeCopy[nextRow][nextCol] != 'C') {
                  nextRow += direction.first
                  nextCol += direction.second
                  if (nextRow !in mazeCopy.indices || nextCol !in mazeCopy[row].indices || mazeCopy[nextRow][nextCol] == 'O') {
                    return@any true
                  }
                }
                return@any false
              }
              if (isOutside) {
                mazeCopy[row][col] = 'O'
              }
            }
          }
        }
      }
    }
    println(enclosedCount)
  }
  
  private fun getStartingPipe(): Char {
    val startingDirections = mutableListOf<Pair<Int, Int>>()
    directions.forEach { direction ->
      val nextRow = startingPosition.first + direction.first
      val nextCol = startingPosition.second + direction.second
      if (pipesToDirectionLists[maze[nextRow][nextCol]]?.contains(
          Pair(
            -direction.first, -direction.second
          )
        ) == true
      ) {
        startingDirections.add(Pair(direction.first, direction.second))
      }
    }
    pipesToDirectionLists.forEach { (pipe, directionList) ->
      if (directionList == startingDirections) {
        return pipe
      }
    }
    return 'S'
  }
}
