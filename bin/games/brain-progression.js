#!/usr/bin/env node
import { randomNum } from '../../src/serviceFunctions.js';
import greeting from '../../src/cli.js';
import game from '../../src/index.js';

const generateNumsStorage = (firstNum, step) => {
  const progressLength = 10;
  const numsStorage = [];
  let currentNum = firstNum;
  for (let i = 0; i < progressLength; i += 1) {
    numsStorage.push(currentNum);
    currentNum += step;
  }
  return numsStorage;
};

const generateTask = () => {
  const firstNum = randomNum();
  const step = randomNum(5);
  const searchNum = randomNum(9);
  const numsStorage = generateNumsStorage(firstNum, step);
  const correctAnswer = numsStorage[searchNum];
  numsStorage[searchNum] = '..';
  const task = numsStorage.join(', ');
  return { task, correctAnswer };
};

const startProgressionGame = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  game(name, generateTask);
};

startProgressionGame();
