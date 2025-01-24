// 461. Hamming Distance

/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1
*/

const hammingDistance = function (x, y) {
  let xorr = x ^ y;
  let count = 0;

  while (xorr > 0) {
    xorr &= xorr - 1;
    count++;
  }
  return count;
};

console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
console.log(hammingDistance(93, 73));
