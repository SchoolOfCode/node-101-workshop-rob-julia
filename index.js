// import myCollection at the top of index.js
import myCollection from "./collection.js";

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

  function describeItem(item) {
    if (item.count === 1) {
      console.log(`I have a ${chalk.cyan.underline(item.name)}. Here's what I like about it: ${chalk.green.italic(item.whatILike)}`)
    } else {
      console.log(`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}s. Here's what I like about them: ${chalk.green.bgWhite(item.whatILike)}`)
    }
  }
describeItem(myCollection[1]);

function describeCollection(arr) {
  arr.forEach(describeItem);
  
};

describeCollection(myCollection);