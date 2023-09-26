const randomNum = () => Math.floor(Math.random() * 30);

const isEven = (number) => number % 2 === 0;

const randomOperand = () => {
  const number = randomNum();
  let result;
  if (number > 20) {
    result = '+';
  } else if (number > 10) {
    result = '-';
  } else {
    result = '*';
  }
  return result;
};

export { randomNum, randomOperand, isEven };
