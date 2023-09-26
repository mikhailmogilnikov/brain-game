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

const startCalcGame = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  game(name, generateTask);
};

startCalcGame();
