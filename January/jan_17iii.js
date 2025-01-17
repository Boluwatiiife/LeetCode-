// 326. Power of Three

/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
*/

const isPowerOfThree = function (n) {
  if (n <= 0) return false;
  const log_base3 = Math.log10(n) / Math.log10(3);
  return Number.isInteger(log_base3);
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(6));
