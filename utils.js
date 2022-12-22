const readFile = async (file, callback) => {
  const input = [];
  const fs = require('fs');
  const readline = require('readline');
  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    const newLine = callback ? callback(line) : line;
    input.push(newLine);
  });
  await new Promise((res) => rl.once('close', res));
  return input;
};

module.exports = { readFile };
