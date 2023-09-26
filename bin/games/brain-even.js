#!/usr/bin/env node
import { randomNum } from '../../src/serviceFunctions.js';
import greeting from '../../src/cli.js';
import game from '../../src/index.js';

const gameEven = (user) => {
  let correctAnswer;
  for (let i = 0; i < 3; i += 1) {
    const task = randomNum();
    if (task % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
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
