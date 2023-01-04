import { argv } from 'node:process';
import chalk from 'chalk';
import promptSync from 'prompt-sync';
import randomColor from 'randomcolor';

let colorCode = randomColor();
const prompt = promptSync();
const width = 31;
const height = 9;
const hashRow = '#'.repeat(width);
const hashGap = '#'.repeat(4) + ' '.repeat(width - 8) + '#'.repeat(4) + '\n';
const hashColorCode =
  '#'.repeat(height / 3 + 1) +
  ' '.repeat(8) +
  colorCode +
  ' '.repeat(8) +
  '#'.repeat(height / 3 + 1) +
  '\n';

const hashString =
  (hashRow + '\n').repeat(3) +
  hashGap +
  hashColorCode +
  hashGap +
  (hashRow + '\n').repeat(2) +
  hashRow;

function generateColor() {
  if (argv[2] === 'ask') {
    const promptInput = prompt(
      'What hue and luminosity would you like? ',
    ).split(' ');
    colorCode = randomColor({
      luminosity: promptInput[1],
      hue: promptInput[0],
    });
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
