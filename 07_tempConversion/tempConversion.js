// [°F] = [°C] × 9⁄5 + 32 

const ftoc = function(temp) {
  const celsius = (temp - 32) * 5/9;
  return celsius;
};

const ctof = function(temp) {
  const fahrenheit = temp * 9/5 + 32;
  return fahrenheit;
};

console.log(ftoc(100))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
