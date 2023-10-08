const convertToCelsius = function(temp1) {
  return  +((5/9 * (temp1-32)).toFixed(1))
};

const convertToFahrenheit = function(temp2) {
   return +((temp2 * (9/5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
