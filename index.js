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

if (argv[2] === 'dark' && argv[3]) {
  colorCode = randomColor({
    luminosity: 'dark',
    hue: argv[3],
  });
  console.log(chalk.hex(colorCode)(hashString));
} else if (argv[2] === 'light' && argv[3]) {
  colorCode = randomColor({
    luminosity: 'light',
    hue: argv[3],
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
