lines = File.read('2022/Kotlin/src/main/inputs/day8.txt').lines(chomp: true)
grid = lines.map { |row| row.chars.map(&:to_i) }

class Forest
  attr_reader :width, :height

  def initialize(grid)
    @grid = grid
    @height = grid.length
    @width = grid[0].length
  end

  def visible?(row, col)
    edge?(row, col) || visible_from_left?(row, col) || visible_from_right?(row, col) || visible_from_up?(row, col) ||
      visible_from_down?(row, col)
  end

  # part 2
  def scenic_score(row, col)
    return 0 if edge?(row, col)

    viewing_distance_left(row, col) * viewing_distance_right(row, col) * viewing_distance_up(row, col) *
      viewing_distance_down(row, col)
  end

  private

  def edge?(row, col)
    row.zero? || col.zero? || row == @height - 1 || col == @width - 1
  end

  def visible_from_left?(row, col)
    (0...col).all? { |j| @grid[row][j] < @grid[row][col] }
  end

  def visible_from_right?(row, col)
    (col + 1...@width).all? { |j| @grid[row][j] < @grid[row][col] }
  end

  def visible_from_up?(row, col)
    (0...row).all? { |i| @grid[i][col] < @grid[row][col] }
  end

  def visible_from_down?(row, col)
    (row + 1...@height).all? { |i| @grid[i][col] < @grid[row][col] }
  end

  # part 2
  def viewing_distance_left(row, col)
    j = col - 1
    j -= 1 until j.zero? || @grid[row][j] >= @grid[row][col]
    col - j
  end

  def viewing_distance_right(row, col)
    j = col + 1
    j += 1 until j == @width - 1 || @grid[row][j] >= @grid[row][col]
    j - col
  end

  def viewing_distance_up(row, col)
    i = row - 1
    i -= 1 until i.zero? || @grid[i][col] >= @grid[row][col]
    row - i
  end

  def viewing_distance_down(row, col)
    i = row + 1
    i += 1 until i == @height - 1 || @grid[i][col] >= @grid[row][col]
    i - row
  end
end

forest = Forest.new(grid)
count = 0
# part 2
max_scenic_score = 0
(0...forest.height).each do |row|
  (0...forest.width).each do |col|
    count += 1 if forest.visible?(row, col)
    # part 2
    current_scenic_score = forest.scenic_score(row, col)
    max_scenic_score = current_scenic_score if current_scenic_score > max_scenic_score
  end
end
p count
# part 2
p max_scenic_score
