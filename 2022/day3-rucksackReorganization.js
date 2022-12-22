const { readFile } = require('../utils');

(async () => {
  const input = await readFile('day3.txt');
  console.log(rucksackReorganization(input));
  console.log(rucksackReorganizationPart2(input));
})();

const isLowerCase = (string) => {
  return string.toLowerCase() === string;
};

const getPriority = (item) => {
  return item.charCodeAt(0) - (isLowerCase(item) ? 96 : 38);
};

const rucksackReorganization = (input) => {
  return input.reduce((sumOfPriorities, rucksacks) => {
    const regex = new RegExp(`.{${rucksacks.length / 2}}`, 'g');
    const [rucksack1, rucksack2] = rucksacks.match(regex);
    for (let item of rucksack1) {
      if (rucksack2.includes(item)) {
        return sumOfPriorities + getPriority(item);
      }
    }
  }, 0);
};

const rucksackReorganizationPart2 = (input) => {
  let sumOfPriorities = 0;
  for (let i = 0; i < input.length; i += 3) {
    const [rucksack1, rucksack2, rucksack3] = [input[i], input[i + 1], input[i + 2]];
    for (let item of rucksack1) {
      if (rucksack2.includes(item) && rucksack3.includes(item)) {
        sumOfPriorities += getPriority(item);
        break;
      }
    }
  }
  return sumOfPriorities;
};
