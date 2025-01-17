// 66. Plus One
/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

const plusOne = function (digits) {
  let integer = BigInt(digits.join(""));
  integer = integer + 1n;
  stringgg = integer.toString();

  let result = [];
  for (let i = 0; i < stringgg.length; i++) {
    result.push(+stringgg[i]);
  }
  return result;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
