fun main() {
  val input: Array<Int> =
    readInput("day1.txt") { if (it == "") 0 else it.toInt() }.toArray(arrayOf<Int>())
  println(calorieCounting(input))
  println(calorieCountingPart2(input))
}

fun calorieCounting(input: Array<Int>): Int {
  var caloriesByElf = 0
  return input.fold(0) { result, elem ->
    if (elem == 0) {
      val maxCaloriesByElf = caloriesByElf
      caloriesByElf = 0
      if (maxCaloriesByElf > result) {
        return@fold maxCaloriesByElf
      }
      return@fold result
    }
    caloriesByElf += elem
    return@fold result
  }
}

fun calorieCountingPart2(input: Array<Int>): Int {
  var caloriesByElf = 0
  val caloriesByElfList =
    input.fold(arrayOf<Int>()) { result, elem ->
      if (elem == 0) {
        val newResult = result + caloriesByElf
        caloriesByElf = 0
        return@fold newResult
      }
      caloriesByElf += elem
      return@fold result
    }
  caloriesByElfList.sortDescending()
  return caloriesByElfList[0] + caloriesByElfList[1] + caloriesByElfList[2]
}
