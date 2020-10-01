const chalk = require('chalk');
const limitCharCode = require('./limit-char-code');

module.exports = (text, action, shift) => {
  let realShift = shift % 26;

  if (action === 'decode') {
    realShift *= -1;
  } else if (action !== 'encode') {
    console.error(chalk.red(`Error: unknown action "${action}". "encode"/"decode" only supports`));
    process.exit(1);
  }

  const result = text
    .split('')
    .map(item => {
      const itemCode = item.charCodeAt(0);
      let newItemCode = itemCode + realShift;

      if (itemCode >= 65 && itemCode <= 90) {
        newItemCode = limitCharCode(newItemCode, 65, 90);
      } else if (itemCode >= 97 && itemCode <= 122) {
        newItemCode = limitCharCode(newItemCode, 97, 122);
      } else {
        newItemCode = itemCode;
      }

      return String.fromCharCode(newItemCode);
    })
    .join('');

  return result;
};
