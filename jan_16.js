// 268. Missing Number
/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/

const missingNumber = function (nums) {
  let xor = 0;
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }
  for (let num of nums) {
    xor ^= num;
  }
  return xor;
  //   const n = nums.length;
  //   const expected_sum = (n * (n + 1)) / 2;
  //   const actual_sum = nums.reduce((a, b) => a + b, 0);
  //   return expected_sum - actual_sum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([4, 5, 7]));
console.log(missingNumber([5, 7, 6, 4, 2]));
