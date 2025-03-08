// 2469. Convert the Temperature

const convertTemperature = function (celsius) {
  return [
    parseFloat((celsius + 273.15).toFixed(5)),
    parseFloat((celsius * 1.8 + 32.0).toFixed(5)),
  ];
};

console.log(convertTemperature(36.5));
console.log(convertTemperature(122.11));
