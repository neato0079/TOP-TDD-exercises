const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, val) => sum + val, 0); //initializer must be include to account for the case of an empty array
};

const multiply = function(array) {
  // let product = 1;
  // array.forEach(num =>{
  //   product *= num;
  // })
  // return product
  return array.reduce((prod, val) => prod * val, 1);
};

const power = function(base, exp) {
  let power = 1
	for(i = 0; i < exp; i++){
    power *= base;
  }
  return power;
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
  let factorial = num;
	for(i = num - 1; i >= 1; i--){
    factorial = factorial * i
  }
  return factorial;
};

// console.log(factorial(7))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
