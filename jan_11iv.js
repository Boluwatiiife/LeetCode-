// 67. Add Binary
/*
Given two binary strings a and b return their sums as a binary string
*/

const addBinary = function (a, b) {
  let firstt = BigInt("0b" + a);
  let secondd = BigInt(`0b${b}`);
  return (firstt + secondd).toString(2);
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
