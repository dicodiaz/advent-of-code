lines = File.read('2022/Kotlin/src/main/inputs/day9.txt').lines(chomp: true)

class Rope
  attr_reader :visited

  def initialize(knots_count)
    @knots = Array.new(knots_count, [0, 0])
    @visited = Set[[0, 0]]
    @directions_to_motion = { 'L' => [0, -1], 'R' => [0, 1], 'U' => [-1, 0], 'D' => [1, 0] }
    @adjacency_directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
  end

  def move(direction, steps)
    motion = @directions_to_motion[direction]
    steps.times do
      @knots.map!.with_index do |knot, i|
        next [knot[0] + motion[0], knot[1] + motion[1]] if i.zero?
        next knot if adjacent?(knot, @knots[i - 1])

        prev_knot = @knots[i - 1]
        row_diff = prev_knot[0] - knot[0]
        col_diff = prev_knot[1] - knot[1]
        new_knot = [knot[0] + (row_diff <=> 0), knot[1] + (col_diff <=> 0)]
        @visited.add(new_knot) if i == @knots.length - 1
        new_knot
      end
    end
  end

  def draw
    min_row, max_row = @knots.minmax { |knot1, knot2| knot1[0] <=> knot2[0] }.map(&:first)
    min_col, max_col = @knots.minmax { |knot1, knot2| knot1[1] <=> knot2[1] }.map(&:last)
    grid = Array.new(max_row - min_row + 1) { Array.new(max_col - min_col + 1, '.') }
    @knots.to_enum.with_index.reverse_each { |knot, i| grid[knot[0] - min_row][knot[1] - min_col] = i }
    print grid.map(&:join).join("\n").concat("\n")
  end

  private

  def adjacent?(knot1, knot2)
    @adjacency_directions.any? { |direction| knot2 == [knot1[0] + direction[0], knot1[1] + direction[1]] }
  end
end

rope1 = Rope.new(2)
lines.each do |motion_str|
  direction, steps = motion_str.split
  steps = steps.to_i
  rope1.move(direction, steps)
end
p rope1.visited.length

# part 2
rope2 = Rope.new(10)
lines.each_with_index do |motion_str, _i|
  direction, steps = motion_str.split
  steps = steps.to_i
  rope2.move(direction, steps)
  # p [i, '---', motion_str, '---']
  # rope2.draw
  # break if i == 18
end
p rope2.visited.length
