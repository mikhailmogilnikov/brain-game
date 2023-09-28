const randomNum = (multiplier = 40) => Math.floor(Math.random() * multiplier + 1);

const isEven = (number) => number % 2 === 0;

const randomOperand = () => {
  const number = randomNum();
  let result;
  if (number > 27) {
    result = '+';
  } else if (number > 13) {
    result = '-';
  } else {
    result = '*';
  }
  return result;
};

export { randomNum, randomOperand, isEven };
