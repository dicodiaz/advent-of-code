lines = File.read('2022/Kotlin/src/main/inputs/day12.txt').lines(chomp: true)

start_coord = nil
end_coord = nil
heightmap = lines.map.with_index do |row, i|
  start_coord = [i, row.index('S')] if !start_coord && row.index('S')
  end_coord = [i, row.index('E')] if !end_coord && row.index('E')
  row.chars
end
heightmap[start_coord[0]][start_coord[1]] = 'a'
heightmap[end_coord[0]][end_coord[1]] = 'z'

class HillClimbing
  attr_reader :map

  def initialize(map)
    @map = map
    @directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]
  end

  def step_map(start, downwards: false)
    step_map = Array.new(@map.length) { |i| Array.new(@map[i].length, Float::INFINITY) }
    step_map[start[0]][start[1]] = 0
    pos_stack = [start]
    until pos_stack.empty?
      pos = pos_stack.pop
      steps = step_map[pos[0]][pos[1]]
      @directions.each do |dir|
        new_pos = [pos[0] + dir[0], pos[1] + dir[1]]
        next unless valid?(new_pos) && can_climb?(pos, new_pos, downwards) &&
                    steps + 1 < step_map[new_pos[0]][new_pos[1]]

        pos_stack.push(new_pos)
        step_map[new_pos[0]][new_pos[1]] = steps + 1
      end
    end
    step_map
  end

  private

  def valid?(pos)
    pos[0] >= 0 && pos[0] < @map.length && pos[1] >= 0 && pos[1] < @map[0].length
  end

  def can_climb?(pos, new_pos, downwards)
    if downwards
      @map[new_pos[0]][new_pos[1]].ord - @map[pos[0]][pos[1]].ord >= -1
    else
      @map[new_pos[0]][new_pos[1]].ord - @map[pos[0]][pos[1]].ord <= 1
    end
  end
end

hc = HillClimbing.new(heightmap)
step_map = hc.step_map(start_coord)
p step_map[end_coord[0]][end_coord[1]]

# part 2
step_map = hc.step_map(end_coord, downwards: true)
steps_to_closest_a = Float::INFINITY
step_map.each_with_index do |row, i|
  row.each_with_index do |elem, j|
    steps_to_closest_a = elem if hc.map[i][j] == 'a' && elem < steps_to_closest_a
  end
end
p steps_to_closest_a
