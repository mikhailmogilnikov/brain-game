#!/usr/bin/env node
import { isEven, randomNum } from '../../src/serviceFunctions.js';
import greeting from '../../src/cli.js';
import game from '../../src/index.js';

const gameEven = (user) => {
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const task = randomNum();
    const correctAnswer = isEven(task) ? 'yes' : 'no';
    const result = game(task, correctAnswer);
    if (!result) {
      return null;
    }
  }
  return console.log(`Congratulations, ${user}!`);
};

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameEven(name);
