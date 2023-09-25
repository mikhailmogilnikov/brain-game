#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('What is your name?: ');

const game = (user) => {
  let correctAnswer;

  for (let i = 0; i < 3; i += 1) {
    const num = randomNum();
    if (num % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      );
    }
  }
  return console.log(`Congratulations, ${user}!`);
};

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game(name);
