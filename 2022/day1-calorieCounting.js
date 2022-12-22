const { readFile } = require('../utils');

(async () => {
  const input = await readFile('day1.txt', Number);
  console.log(calorieCounting(input));
  console.log(calorieCountingPart2(input));
})();

const calorieCounting = (input) => {
  let caloriesByElf = 0;
  return input.reduce((result, elem) => {
    if (!elem) {
      const maxCaloriesByElf = caloriesByElf;
      caloriesByElf = 0;
      if (maxCaloriesByElf > result) {
        return maxCaloriesByElf;
      }
      return result;
    }
    caloriesByElf += elem;
    return result;
  }, 0);
};

const calorieCountingPart2 = (input) => {
  let caloriesByElf = 0;
  const caloriesByElfList = input.reduce((result, elem) => {
    if (!elem) {
      const newResult = [...result, caloriesByElf];
      caloriesByElf = 0;
      return newResult;
    }
    caloriesByElf += elem;
    return result;
  }, []);
  caloriesByElfList.sort((a, b) => b - a);
  return caloriesByElfList[0] + caloriesByElfList[1] + caloriesByElfList[2];
};
