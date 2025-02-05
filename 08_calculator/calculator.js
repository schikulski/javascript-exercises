const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(inputArray) {
  // let sum = 0;
  // inputArray.forEach(number => {
  //   sum += number;
  // });
  // return sum;

  // using reduce

  return inputArray.reduce((sum, number) => sum + number, 0);

};

const multiply = function(listOfNumber) {
  // let sum = 1; // first number is simply multiplies by 1, otherwise first multiplication would be 0.
  // listOfNumber.forEach(number => {
  //   sum = sum * number;
  // });
  // return sum;

  // using reduce

  return listOfNumber.reduce((sum, number) => sum * number);

};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(number) {
  let sum = 1;
  for (let i = number; i > 0; i--) {
    sum = sum * i;
  }
  return sum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
