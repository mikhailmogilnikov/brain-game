#!/usr/bin/env node
import greeting from '../../src/cli.js';
import game from '../../src/index.js';
import { randomNum } from '../../src/serviceFunctions.js';

const calculatePrime = (number) => {
  if (number === 1) return 'no';
  let counter = 0;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  return counter === 0 ? 'yes' : 'no';
};

const generateTask = () => {
  const task = randomNum();
  const correctAnswer = calculatePrime(task);
  return { task, correctAnswer };
};

const startPrimeGame = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  game(name, generateTask);
};

startPrimeGame();
