import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let colorCode = randomColor();

const width = 31;
const height = 9;
const hashRow = ('#'.repeat(width) + '\n').repeat(3);
const hashGap = '#'.repeat(4) + ' '.repeat(width - 8) + '#'.repeat(4) + '\n';
const hashColorCode =
  '#'.repeat(height / 3 + 1) +
  ' '.repeat(8) +
  colorCode +
  ' '.repeat(8) +
  '#'.repeat(height / 3 + 1) +
  '\n';

const hashString = hashRow + hashGap + hashColorCode + hashGap + hashRow;

function generateColor() {
  if (argv[2] === 'ask') {
    console.log('What luminosity and hue would you like me to generate?');
    return;
  } else if (argv[3] === 'dark') {
    colorCode = randomColor({
      luminosity: 'dark',
      hue: argv[2],
    });
  } else if (argv[3] === 'light') {
    colorCode = randomColor({
      luminosity: 'light',
      hue: argv[2],
    });
  } else {
    colorCode = randomColor({
      hue: argv[2],
    });
  }
  console.log(chalk.hex(colorCode)(hashString));
}

generateColor();
