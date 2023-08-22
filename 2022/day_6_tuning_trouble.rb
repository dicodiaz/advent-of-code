datastream = File.read('2022/Kotlin/src/main/inputs/day6.txt')
char_count = {}
window_start = 0
window_end = 0
# part 1
# until window_end - window_start == 4 || window_end == datastream.length
# part 2
until window_end - window_start == 14 || window_end == datastream.length
  if char_count[datastream[window_end]]
    until datastream[window_start] == datastream[window_end]
      char_count.delete(datastream[window_start])
      window_start += 1
    end
    window_start += 1
  else
    char_count[datastream[window_end]] = 1
  end
  window_end += 1
end
p window_end
