lines = File.read('2022/Kotlin/src/main/inputs/day10.txt').lines(chomp: true)
cycle = 1
x = 1
signal_strengths = []
# part 2
crt = ''
lines.each do |instruction|
  command, value = instruction.split
  value = value.to_i
  case command
  when 'noop'
    cycle += 1
  when 'addx'
    cycle += 1
    signal_strengths.push(cycle * x) if [20, 60, 100, 140, 180, 220].include?(cycle)
    x += value
    # part 2
    crt += "\n" if (cycle % 40).zero?
    crt += [x - 1, x, x + 1].include?(cycle % 40) ? '#' : '.'
    cycle += 1
  end
  signal_strengths.push(cycle * x) if [20, 60, 100, 140, 180, 220].include?(cycle)
  # part 2
  crt += "\n" if (cycle % 40).zero?
  crt += [x - 1, x, x + 1].include?(cycle % 40) ? '#' : '.'
end
p signal_strengths.sum
# part 2
print crt.prepend('##')
