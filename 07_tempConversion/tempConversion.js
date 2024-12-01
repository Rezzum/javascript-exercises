const convertToCelsius = function(tempFahrenheit) {
  const tempCelsius = ((tempFahrenheit - 32) * (5/9));
  let roundedTempCelsius = 0;

  if (Number.isInteger(tempCelsius) === false) {
    roundedTempCelsius = parseFloat(tempCelsius.toFixed(1));
    return roundedTempCelsius;
  }
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  const tempFahrenheit = ((tempCelsius * (9/5)) + 32);
  let roundedTempFahrenheit = 0;

  if(Number.isInteger(tempFahrenheit) === false) {
    roundedTempFahrenheit = parseFloat(tempFahrenheit.toFixed(1));
    return roundedTempFahrenheit;
  }
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
