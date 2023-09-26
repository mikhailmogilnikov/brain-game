#!/usr/bin/env node
import greeting from '../../src/cli.js';
import game from '../../src/index.js';
import { randomNum, randomOperand } from '../../src/serviceFunctions.js';

const gameCalc = (user) => {
  const maxAttempts = 3;
  let correctAnswer;
  for (let i = 0; i < maxAttempts; i += 1) {
    const a = randomNum();
    const b = randomNum();
    const operand = randomOperand();
    const task = `${a} ${operand} ${b}`;
    switch (operand) {
      case '+':
        correctAnswer = a + b;
        break;
      case '-':
        correctAnswer = a - b;
        break;
      case '*':
        correctAnswer = a * b;
        break;
      default:
        return null;
    }
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
