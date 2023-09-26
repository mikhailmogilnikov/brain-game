#!/usr/bin/env node
import { randomNum } from '../../src/serviceFunctions.js';
import greeting from '../../src/cli.js';
import game from '../../src/index.js';

const calculateResult = (a, b) => {
  const min = Math.min(a, b);
  let number = 1;
  let maxNum = 1;
  for (let i = 0; i < min; i += 1) {
    if (a % number === 0 && b % number === 0 && number > maxNum) {
      maxNum = number;
    }
    number += 1;
  }
  return maxNum;
};

const generateTask = () => {
  const a = randomNum();
  const b = randomNum();
  const task = `${a} ${b}`;
  const correctAnswer = calculateResult(a, b);
  return { task, correctAnswer };
};

const startGcdGame = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  game(name, generateTask);
};

startGcdGame();
