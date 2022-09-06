import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let colorCode = randomColor();
const hashString = `###############################
###############################
###############################
#####                     #####
#####       ${colorCode}       #####
#####                     #####
###############################
###############################
###############################`;

if (argv[2] === 'ask') {
  console.log('What hue and luminosity would you me to generate?');
} else if (argv[2] && argv[3] === 'dark') {
  colorCode = randomColor({
    luminosity: 'dark',
    hue: argv[2],
  });
  console.log(chalk.hex(colorCode)(hashString));
} else if (argv[2] && argv[3] === 'light') {
  colorCode = randomColor({
    luminosity: 'light',
    hue: argv[2],
  });
  console.log(chalk.hex(colorCode)(hashString));
} else if (argv[2]) {
  colorCode = randomColor({
    hue: argv[2],
  });
  console.log(chalk.hex(colorCode)(hashString));
} else {
  console.log(chalk.hex(colorCode)(hashString));
}
