lines = File.read('2022/Kotlin/src/main/inputs/day5.txt').lines(chomp: true)
first_blank_line = lines.find_index('')
stack_lines = lines[0...first_blank_line]
move_lines = lines[first_blank_line + 1..]

stacks = {}
(stack_lines.length - 1).downto(0).each do |i|
  stack_lines[i].scan(/.{3,4}/).each_with_index do |elem, j|
    elem.strip!
    if i == stack_lines.length - 1
      stacks[j + 1] = []
    else
      stacks[j + 1] << elem[1] unless elem.empty?
    end
  end
end

move_lines.each do |line|
  move, from, to = line.scan(/\d+/).map(&:to_i)
  # part 1
  # move.times do
  #   stacks[to] << stacks[from].pop
  # end
  # part 2
  stacks[to].push(*stacks[from].pop(move))
end

p stacks.values.map(&:last).join
