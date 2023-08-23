lines = File.read('2022/Kotlin/src/main/inputs/day7.txt').lines(chomp: true)

class File
  attr_accessor :name, :size

  def initialize(name, size)
    @name = name
    @size = size
  end
end

class Folder
  attr_reader :files, :folders
  attr_accessor :name, :size, :parent_folder

  def initialize(name)
    @name = name
    @files = []
    @folders = []
  end

  def add_file(file)
    @files << file
  end

  def add_folder(folder)
    @folders << folder
    folder.parent_folder = self
  end
end

root = Folder.new('/')
current_folder = root
lines.each do |line|
  c1, c2, c3 = line.split
  if c1 == '$'
    if c2 == 'cd'
      current_folder = case c3
                       when '/'
                         root
                       when '..'
                         current_folder.parent_folder
                       else
                         current_folder.folders.find { |folder| folder.name == c3 }
                       end
    end
  elsif c1 == 'dir'
    new_folder = Folder.new(c2)
    current_folder.add_folder(new_folder)
  else
    new_file = File.new(c2, c1.to_i)
    current_folder.add_file(new_file)
  end
end

class Sum
  attr_reader :value

  def self.instance
    @instance ||= new
  end

  def initialize
    @value = 0
  end

  def add_conditionally(value)
    @value += value if value <= 100_000
  end
end

def calculate_sizes(folder)
  if folder.folders.empty?
    folder.size = folder.files.sum(&:size)
    Sum.instance.add_conditionally(folder.size)
    return
  end

  folder.folders.each { |f| calculate_sizes(f) }
  folder.size = folder.folders.sum(&:size) + folder.files.sum(&:size)
  Sum.instance.add_conditionally(folder.size)
end

calculate_sizes(root)
p Sum.instance.value

# part 2
class DeleteFolder
  attr_reader :folder, :space_needed

  def self.instance(root = nil)
    @instance ||= new(root)
  end

  def initialize(root)
    @folder = root
    @space_needed = root.size - 40_000_000
  end

  def check(folder)
    @folder = folder if folder.size >= @space_needed && folder.size < @folder.size
  end
end

DeleteFolder.instance(root)
def traverse_folders(folder)
  DeleteFolder.instance.check(folder)
  folder.folders.each { |f| traverse_folders(f) }
end

traverse_folders(root)
p DeleteFolder.instance.folder.size
