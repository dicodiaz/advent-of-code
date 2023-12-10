fun main() {
  val input = readInput("day2.txt") { line ->
    line.split(": ")[1].split("; ").map { set ->
      val cubeSet = CubeSet()
      set.split(", ").forEach { cubes ->
        val splitCubes = cubes.split(' ')
        when (splitCubes[1]) {
          "red" -> cubeSet.red = splitCubes[0].toInt()
          "green" -> cubeSet.green = splitCubes[0].toInt()
          "blue" -> cubeSet.blue = splitCubes[0].toInt()
        }
      }
      cubeSet
    }
  }
  val cubeConundrum = Day2CubeConundrum(input)
  cubeConundrum.part1()
  cubeConundrum.part2()
}

class CubeSet(var red: Int = 0, var green: Int = 0, var blue: Int = 0)

class Day2CubeConundrum(private val input: List<List<CubeSet>>) {
  fun part1() {
    var sum = 0
    input.forEachIndexed { index, game ->
      if (game.all { cubeSet -> cubeSet.red <= 12 && cubeSet.green <= 13 && cubeSet.blue <= 14 }) {
        sum += index + 1
      }
    }
    println(sum)
  }

  fun part2() {
    var sum = 0
    input.forEach { game ->
      val maxValues = game.fold(listOf(0,0,0)) { maxValues, cubeSet ->
        listOf(cubeSet.red.coerceAtLeast(maxValues[0]), cubeSet.green.coerceAtLeast(maxValues[1]), cubeSet.blue.coerceAtLeast(maxValues[2]))
      }
      sum += maxValues[0] * maxValues[1] * maxValues[2]
    }
    println(sum)
  }
}