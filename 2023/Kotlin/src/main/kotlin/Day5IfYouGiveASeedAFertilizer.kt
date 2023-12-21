typealias CategoryToRanges = MutableMap<String, MutableMap<LongRange, LongRange>>

fun main() {
  val categories = listOf(
    "seed-to-soil",
    "soil-to-fertilizer",
    "fertilizer-to-water",
    "water-to-light",
    "light-to-temperature",
    "temperature-to-humidity",
    "humidity-to-location"
  )
  var seeds = listOf<Long>()
  var category = ""
  val categoryToRanges: CategoryToRanges = mutableMapOf()
  readInput("day5.txt") { line ->
    with(line) {
      val newCategory = categories.filter { it in this }
      when {
        contains("seeds") -> {
          seeds = line.split(": ")[1].split(' ').map(String::toLong)
        }
        
        newCategory.isNotEmpty() -> {
          category = newCategory[0]
          categoryToRanges[category] = mutableMapOf()
        }
        
        else -> {
          if (line != "") {
            val (destinationRangeStart, sourceRangeStart, rangeLength) = line.split(' ')
              .map(String::toLong)
            categoryToRanges[category]?.set(
              sourceRangeStart..<sourceRangeStart + rangeLength,
              destinationRangeStart..<destinationRangeStart + rangeLength
            )
          }
        }
      }
    }
  }
  val ifYouGiveASeedAFertilizer = Day5IfYouGiveASeedAFertilizer(seeds, categoryToRanges)
  ifYouGiveASeedAFertilizer.part1()
  ifYouGiveASeedAFertilizer.part2()
}

class Day5IfYouGiveASeedAFertilizer(
  private val seeds: List<Long>,
  private val conversionMap: CategoryToRanges,
) {
  fun part1() {
    var minLocation = Long.MAX_VALUE
    seeds.forEach { seed ->
      val soil = convertValue(seed, "seed-to-soil")
      val fertilizer = convertValue(soil, "soil-to-fertilizer")
      val water = convertValue(fertilizer, "fertilizer-to-water")
      val light = convertValue(water, "water-to-light")
      val temperature = convertValue(light, "light-to-temperature")
      val humidity = convertValue(temperature, "temperature-to-humidity")
      val location = convertValue(humidity, "humidity-to-location")
      minLocation = minLocation.coerceAtMost(location)
    }
    println(minLocation)
  }
  
  fun part2() {
    val seedRanges = seeds.chunked(2).map { (rangeStart, rangeLength) ->
      rangeStart..<rangeStart + rangeLength
    }
    val soilRanges = convertRanges(seedRanges, "seed-to-soil")
    val fertilizerRanges = convertRanges(soilRanges, "soil-to-fertilizer")
    val waterRanges = convertRanges(fertilizerRanges, "fertilizer-to-water")
    val lightRanges = convertRanges(waterRanges, "water-to-light")
    val temperatureRanges = convertRanges(lightRanges, "light-to-temperature")
    val humidityRanges = convertRanges(temperatureRanges, "temperature-to-humidity")
    val locationRanges = convertRanges(humidityRanges, "humidity-to-location")
    println(locationRanges.minByOrNull { it.first }?.first)
  }
  
  private fun convertValue(value: Long, category: String): Long {
    conversionMap[category]?.forEach { (sourceRange, destinationRange) ->
      if (value in sourceRange) {
        return value - sourceRange.first + destinationRange.first
      }
    }
    return value
  }
  
  private fun convertRanges(ranges: List<LongRange>, category: String): List<LongRange> {
    val convertedRanges = mutableListOf<LongRange>()
    ranges.forEach { range ->
      val intersections = mutableListOf<LongRange>()
      conversionMap[category]?.forEach { (sourceRange, destinationRange) ->
        val intersection = intersection(range, sourceRange)
        if (intersection != null) {
          intersections.add(intersection)
          val convertedRangeStart = intersection.first - sourceRange.first + destinationRange.first
          val convertedRangeEnd = intersection.last - sourceRange.last + destinationRange.last
          convertedRanges.add(convertedRangeStart..convertedRangeEnd)
        }
      }
      val preservedRanges = getPreservedRanges(range, intersections)
      convertedRanges.addAll(preservedRanges)
    }
    return convertedRanges
  }
  
  private fun intersection(rangeA: LongRange, rangeB: LongRange): LongRange? {
    val min = rangeA.first.coerceAtLeast(rangeB.first)
    val max = rangeA.last.coerceAtMost(rangeB.last)
    if (min in rangeA && min in rangeB && max in rangeA && max in rangeB) {
      return min..max
    }
    return null
  }
  
  private fun getPreservedRanges(
    fullRange: LongRange,
    intersections: List<LongRange>,
  ): List<LongRange> {
    if (intersections.isEmpty()) {
      return listOf(fullRange)
    }
    val preservedRanges = mutableListOf<LongRange>()
    val sortedIntersections = intersections.sortedBy { it.first }
    if (sortedIntersections[0].first > fullRange.first) {
      preservedRanges.add(fullRange.first..<sortedIntersections[0].first)
    }
    for (i in 1..<sortedIntersections.size) {
      if (sortedIntersections[i].first > sortedIntersections[i - 1].last + 1) {
        preservedRanges.add(sortedIntersections[i - 1].last..<sortedIntersections[i].first)
      }
    }
    if (fullRange.last > sortedIntersections.last().last) {
      preservedRanges.add(sortedIntersections.last().last + 1..fullRange.last)
    }
    return preservedRanges
  }
}
