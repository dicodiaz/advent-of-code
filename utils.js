const readFile = async (file) => {
  const input = [];
  const fs = require('fs');
  const readline = require('readline');
  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    input.push(line);
  });
  await new Promise((res) => rl.once('close', res));
  return input;
};

module.exports = { readFile };
