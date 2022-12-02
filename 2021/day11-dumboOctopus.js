const input = `4341347643
5477728451
2322733878
5453762556
2718123421
4237886115
5631617114
2217667227
4236581255
4482627641`
  .split('\n')
  .map((line) => line.split('').map((elem) => Number(elem)));

const input2 = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`
  .split('\n')
  .map((line) => line.split('').map((elem) => Number(elem)));

const input3 = `11111
19991
19191
19991
11111`
  .split('\n')
  .map((line) => line.split('').map((elem) => Number(elem)));

const adjacents = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

const step = (input) => {
  const queue = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (++input[i][j] > 9) {
        queue.push([i, j]);
      }
    }
  }
  let flashes = 0;
  while (queue.length) {
    const [x, y] = queue.shift();
    input[x][y] = 0;
    adjacents.forEach(([adjacentX, adjacentY]) => {
      const newX = x + adjacentX;
      const newY = y + adjacentY;
      if (input[newX] && input[newX][newY] && ++input[newX][newY] > 9) {
        if (!queue.some(([a, b]) => a === newX && b === newY)) {
          queue.push([newX, newY]);
        }
      }
    });
    flashes++;
  }
  return flashes;
};

const getTotalFlashes = (input, steps) => {
  let totalFlashes = 0;
  for (let i = 0; i < steps; i++) {
    totalFlashes += step(input);
  }
  return totalFlashes;
};

console.log(getTotalFlashes(input2, 100));

getFirstStepAllOctopiFlash = (input) => {
  const size = input.length * input[0].length;
  let steps = 1;
  while (step(input) !== size) {
    steps++;
  }
  return steps;
};

console.log(getFirstStepAllOctopiFlash(input));
