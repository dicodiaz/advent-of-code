lines = File.read('2022/Kotlin/src/main/inputs/day11.txt').lines(chomp: true)

class Monkey
  attr_reader :id, :operate_count
  attr_accessor :items, :operator, :value, :divisible_by, :if_true, :if_false

  def initialize(id)
    @id = id
    @operate_count = 0
  end

  def operate(item)
    @operate_count += 1
    case @operator
    when '+'
      item + @value
    when '*'
      item * @value
    when '**'
      item**@value
    end
  end

  def test(item)
    if (item % @divisible_by).zero?
      @if_true
    else
      @if_false
    end
  end
end

monkeys = []
i = 0
while i < lines.length
  if lines[i].start_with?('Monkey')
    id = lines[i].scan(/\d+/)[0].to_i
    new_monkey = Monkey.new(id)
    i += 1
    new_monkey.items = lines[i].scan(/\d+/).map(&:to_i)
    i += 1
    split_line = lines[i].split
    if split_line.last == 'old'
      new_monkey.value = 2
      new_monkey.operator = '**'
    else
      new_monkey.value = split_line.pop.to_i
      new_monkey.operator = split_line.pop
    end
    i += 1
    new_monkey.divisible_by = lines[i].scan(/\d+/)[0].to_i
    i += 1
    new_monkey.if_true = lines[i].scan(/\d+/)[0].to_i
    i += 1
    new_monkey.if_false = lines[i].scan(/\d+/)[0].to_i
    monkeys << new_monkey
  end
  i += 1
end

# part 1
# 20.times do
# part 2
10_000.times do
  monkeys.each do |monkey|
    until monkey.items.empty?
      item = monkey.items.shift
      # part 1
      # new_item = monkey.operate(item) / 3
      # part 2
      new_item = monkey.operate(item)
      target_id = monkey.test(new_item)
      target_monkey = monkeys.find { |monkey| monkey.id == target_id }
      target_monkey.items.push(new_item)
    end
  end
end
monkeys.sort! { |m1, m2| m2.operate_count <=> m1.operate_count }
p monkeys[0].operate_count * monkeys[1].operate_count
