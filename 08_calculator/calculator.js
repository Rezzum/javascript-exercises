const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((start, current) => start + current, 0);
};

const multiply = function(array) {
  return array.reduce((start, current) => start * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let factorial = 1;
  if (a === 0) {
    return factorial;
  } else {
    for (let i = 1; i <= a; i++) {
      factorial *= i;
    }
    return factorial;
  }
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
