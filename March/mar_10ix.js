// 2553. Separate the Digits in an Array

const separateDigits = function (nums) {
  let arr = [];

  for (no of nums) {
    let temp = no.toString();
    for (char of temp) {
      arr.push(Number(char));
    }
  }
  return arr;
};

console.log(separateDigits([13, 25, 83, 77]));
console.log(separateDigits([7, 1, 3, 9]));
