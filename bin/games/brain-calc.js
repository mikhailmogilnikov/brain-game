#!/usr/bin/env node
import greeting from '../../src/cli.js';
import game from '../../src/index.js';
import { randomNum, randomOperand } from '../../src/serviceFunctions.js';

const calculateResult = (a, b, operand) => {
  switch (operand) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const generateTask = () => {
  const a = randomNum();
  const b = randomNum();
  const operand = randomOperand();
  const task = `${a} ${operand} ${b}`;
  const correctAnswer = calculateResult(a, b, operand);
  return { task, correctAnswer };
};

const gameCalc = (user) => {
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const { task, correctAnswer } = generateTask();
    const result = game(task, correctAnswer);
    if (!result) {
      return null;
    }
  }
  return console.log(`Congratulations, ${user}!`);
};

const name = greeting();
console.log('What is the result of the expression?');
gameCalc(name);
