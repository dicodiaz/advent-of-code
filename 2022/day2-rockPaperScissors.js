const { readFile } = require('../utils');

(async () => {
  const input = await readFile('day2.txt');

  // A, X: Rock
  // B, Y: Paper
  // C, Z: Scissors
  const roundScoreMap = {
    'A X': 1 + 3,
    'A Y': 2 + 6,
    'A Z': 3 + 0,
    'B X': 1 + 0,
    'B Y': 2 + 3,
    'B Z': 3 + 6,
    'C X': 1 + 6,
    'C Y': 2 + 0,
    'C Z': 3 + 3,
  };

  // A: Rock
  // B: Paper
  // C: Scissors
  // X: Lose
  // Y: Draw
  // Z: Win
  const roundScoreMapPart2 = {
    'A X': 3 + 0,
    'A Y': 1 + 3,
    'A Z': 2 + 6,
    'B X': 1 + 0,
    'B Y': 2 + 3,
    'B Z': 3 + 6,
    'C X': 2 + 0,
    'C Y': 3 + 3,
    'C Z': 1 + 6,
  };

  console.log(rockPaperScissors(input, roundScoreMap));
  console.log(rockPaperScissors(input, roundScoreMapPart2));
})();

const rockPaperScissors = (input, roundScoreMap) => {
  return input.reduce((result, round) => {
    const score = roundScoreMap[round];
    return result + score;
  }, 0);
};
