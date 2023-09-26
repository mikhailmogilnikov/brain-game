import readlineSync from 'readline-sync';

const game = (task, correctAnswer) => {
  const answerString = correctAnswer.toString();
  console.log(`Question: ${task}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === answerString) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${answerString}'`,
    );
    return false;
  }
  return true;
};

export default game;
