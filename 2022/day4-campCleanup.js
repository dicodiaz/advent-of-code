const { readFile } = require('../utils');

(async () => {
  const input = await readFile('day4.txt');
  console.log(campCleanup(input));
  console.log(campCleanupPart2(input));
})();

const campCleanup = (input) => {
  return input.reduce((count, elem) => {
    const [from1, to1, from2, to2] = elem.split(/[,-]/g).map(Number);
    if ((from1 <= from2 && to1 >= to2) || (from2 <= from1 && to2 >= to1)) {
      return count + 1;
    }
    return count;
  }, 0);
};

const campCleanupPart2 = (input) => {
  return input.reduce((count, elem) => {
    const [from1, to1, from2, to2] = elem.split(/[,-]/g).map(Number);
    if ((from1 <= from2 && to1 >= from2) || (from2 <= from1 && to2 >= from1)) {
      return count + 1;
    }
    return count;
  }, 0);
};
