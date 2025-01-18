// 338. Counting Bits

/*Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
*/

const countBits = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  let binaryy = [];
  for (let x = 0; x < arr.length; x++) {
    binaryy.push(arr[x].toString(2).split(""));
  }
  let result = [];
  for (let y = 0; y < binaryy.length; y++) {
    let arr = binaryy[y];
    const count = arr.filter((one) => one === "1").length;
    result.push(count);
  }
  return result;
};

console.log(countBits(2));
console.log(countBits(5));

// more time efficient solution
const bits_counting = function (n) {
  const ans = new Array(n + 1).fill(0); // Initialize the result array with 0s
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1); // Use the recurrence relation
  }
  return ans;
};

console.log(bits_counting(2));
console.log(bits_counting(5));
