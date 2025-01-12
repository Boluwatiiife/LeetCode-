// 69. Sqrt(x)

/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

const mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

console.log(mySqrt(4));
console.log(mySqrt(8));

// NOTE
let number = 4.6;

console.log(Math.ceil(number)); // Output: 5
console.log(Math.floor(number)); // Output: 4
console.log(Math.round(number)); // Output: 5
console.log(Math.trunc(number)); // Output: 4
