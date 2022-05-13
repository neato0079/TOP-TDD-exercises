// [°F] = [°C] × 9⁄5 + 32 

const ftoc = function(temp) {
  const celsius = (temp - 32) * 5/9;
  // return Math.round((celsius + Number.EPSILON) * 10) / 10;
  return Math.round(celsius * 10) / 10;
};

const ctof = function(temp) {
  const fahrenheit = temp * 9/5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

console.log(ftoc(100))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
