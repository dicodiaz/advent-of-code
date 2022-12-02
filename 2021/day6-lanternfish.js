const input = [
  5, 1, 1, 5, 4, 2, 1, 2, 1, 2, 2, 1, 1, 1, 4, 2, 2, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 5, 3, 1, 4,
  1, 1, 1, 1, 1, 4, 1, 5, 1, 1, 1, 4, 1, 2, 2, 3, 1, 5, 1, 1, 5, 1, 1, 5, 4, 1, 1, 1, 4, 3, 1, 1, 1,
  3, 1, 5, 5, 1, 1, 1, 1, 5, 3, 2, 1, 2, 3, 1, 5, 1, 1, 4, 1, 1, 2, 1, 5, 1, 1, 1, 1, 5, 4, 5, 1, 3,
  1, 3, 3, 5, 5, 1, 3, 1, 5, 3, 1, 1, 4, 2, 3, 3, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 1, 3, 2,
  5, 2, 1, 1, 1, 4, 2, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 4, 1, 3, 5, 5, 1, 2, 1, 3, 1, 1, 4, 1, 1, 1, 1,
  2, 1, 1, 4, 2, 3, 1, 1, 1, 1, 1, 1, 1, 4, 5, 1, 1, 3, 1, 1, 2, 1, 1, 1, 5, 1, 1, 1, 1, 1, 3, 2, 1,
  2, 4, 5, 1, 5, 4, 1, 1, 3, 1, 1, 5, 5, 1, 3, 1, 1, 1, 1, 4, 4, 2, 1, 2, 1, 1, 5, 1, 1, 4, 5, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 4, 2, 1, 1, 1, 2, 5, 1, 4, 1, 1, 1, 4, 1, 1, 5, 4, 4, 3,
  1, 1, 4, 5, 1, 1, 3, 5, 3, 1, 2, 5, 3, 4, 1, 3, 5, 4, 1, 3, 1, 5, 1, 4, 1, 1, 4, 2, 1, 1, 1, 3, 2,
  1, 1, 4,
];

const lanternfish = (input) => {
  let keyMap = {};
  input.forEach((elem) => {
    if (keyMap[elem]) keyMap[elem]++;
    else keyMap[elem] = 1;
  });
  for (let i = 1; i <= 256; i++) {
    passOneDay(keyMap);
  }
  return Object.values(keyMap).reduce((a, b) => a + b);
};

const passOneDay = (keyMap) => {
  Object.keys(keyMap).forEach((key) => {
    keyMap[key - 1] = keyMap[key];
    if (!keyMap[key + 1]) delete keyMap[key];
  });
  if (keyMap[-1]) {
    if (keyMap[6]) keyMap[6] += keyMap[-1];
    else keyMap[6] = keyMap[-1];
    keyMap[8] = keyMap[-1];
    delete keyMap[-1];
  }
};

console.log(lanternfish(input));
