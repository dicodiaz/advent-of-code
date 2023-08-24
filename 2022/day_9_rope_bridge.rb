lines = File.read('2022/Kotlin/src/main/inputs/day9.txt').lines(chomp: true)

class Rope
  attr_reader :visited

  def initialize
    @head = [0, 0]
    @tail = [0, 0]
    @visited = Set[[0, 0]]
    @directions_to_motion = { 'L' => [0, -1], 'R' => [0, 1], 'U' => [-1, 0], 'D' => [1, 0] }
    @adjacency_directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
  end

  def move(direction, steps)
    motion = @directions_to_motion[direction]
    steps.times do
      new_head = [@head[0] + motion[0], @head[1] + motion[1]]
      unless tail_adjacent_to?(new_head)
        @tail = @head
        @visited.add(@tail)
      end
      @head = new_head
    end
  end

  private

  def tail_adjacent_to?(new_head)
    @adjacency_directions.any? { |direction| new_head == [@tail[0] + direction[0], @tail[1] + direction[1]] }
  end
end

rope = Rope.new
lines.each do |motion_str|
  direction, steps = motion_str.split
  steps = steps.to_i
  rope.move(direction, steps)
end
p rope.visited.length
