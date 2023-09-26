import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('What is your name?: ');
  return name;
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  return name;
};

export default greeting;
