#!/usr/bin/env node
import { isEven, randomNum } from '../../src/serviceFunctions.js';
import greeting from '../../src/cli.js';
import game from '../../src/index.js';

const generateTask = () => {
  const task = randomNum();
  const correctAnswer = isEven(task) ? 'yes' : 'no';
  return { task, correctAnswer };
};

const startEvenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  game(name, generateTask);
};

startEvenGame();
