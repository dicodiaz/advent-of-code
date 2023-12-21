fun main() {
  val input = readInput("day9.txt") { it.split(' ').map(String::toInt) }
  val mirageMaintenance = Day9MirageMaintenance(input)
  mirageMaintenance.part1()
  mirageMaintenance.part2()
}

class Day9MirageMaintenance(
  private val input: List<List<Int>>,
) {
  fun part1() {
    val extrapolatedValues = mutableListOf<Int>()
    input.forEach { sequence ->
      val history = getHistory(sequence)
      val extrapolatedValue = history.fold(0) { extrapolatedValue, seq ->
        extrapolatedValue + seq.last()
      }
      extrapolatedValues.add(extrapolatedValue)
    }
    println(extrapolatedValues.sum())
  }
  
  fun part2() {
    val extrapolatedValues = mutableListOf<Int>()
    input.forEach { sequence ->
      val history = getHistory(sequence)
      val extrapolatedValue = history.foldRight(0) { seq, extrapolatedValue ->
        seq.first() - extrapolatedValue
      }
      extrapolatedValues.add(extrapolatedValue)
    }
    println(extrapolatedValues.sum())
  }
  
  private fun getHistory(sequence: List<Int>): List<List<Int>> {
    val history = mutableListOf(sequence)
    while (history.last().any { it != 0 }) {
      val prevSequence = history.last()
      val newSequence = mutableListOf<Int>()
      for (i in 1..<prevSequence.size) {
        newSequence.add(prevSequence[i] - prevSequence[i - 1])
      }
      history.add(newSequence)
    }
    return history
  }
}
