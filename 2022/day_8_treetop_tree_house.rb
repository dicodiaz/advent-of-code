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
end

forest = Forest.new(grid)
p forest.width, forest.height
count = 0
(0...forest.height).each do |row|
  (0...forest.width).each do |col|
    count += 1 if forest.visible?(row, col)
  end
end
p count
