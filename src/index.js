import readlineSync from 'readline-sync';

const game = (user, generateTask) => {
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const { task, correctAnswer } = generateTask();
    const answerString = correctAnswer.toString();
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === answerString) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${answerString}'`,
      );
    }
  }
  return console.log(`Congratulations, ${user}!`);
};

export default game;
