/** 
 You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
*/

const decrypt = function (code, k) {
  const code_length = code.length;
  let result = [];

  for (let i = 0; i < code_length; i++) {
    let numberr = k;
    if (numberr === 0) {
      result.push(0);
    } else {
      let sum = 0;
      if (k > 0) {
        for (let j = 1; j <= numberr; j++) {
          sum = sum + code[(i + j) % code_length];
        }
      } else if (numberr < 0) {
        for (let m = 1; m <= Math.abs(numberr); m++) {
          sum = sum + code[(i - m + code_length) % code_length];
        }
      }
      result.push(sum);
    }
  }

  return result;
};

console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([1, 2, 3, 4], 0));
console.log(decrypt([2, 4, 9, 3], -2));
