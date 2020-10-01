const program = require('commander');
const chalk = require('chalk');

program
  .storeOptionsAsProperties(true)
  .option('-s, --shift <number>', 'shift option required')
  .option('-a, --action <string>', 'action option required')
  .option('-o, --output <string>', 'output file name')
  .option('-i, --input <string>', 'input file name')
  .parse(process.argv);

if (typeof program.action !== 'string') {
  console.error(chalk.red(`Error: "action" is required argument`));
  process.exit(2);
}

if (!program.shift) {
  console.error(chalk.red(`Error: "shift" is required argument`));
  process.exit(2);
}

module.exports = {
  shift: program.shift,
  action: program.action.toLowerCase(),
  inputFile: program.input,
  outputFile: program.output
};
