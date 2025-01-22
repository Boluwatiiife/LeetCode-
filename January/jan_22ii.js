// 414. Third Maximum Number

/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/

const thirdMax = function (nums) {
  let maxx = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxx) {
      maxx = nums[i];
    }
  }
  const result = nums.filter((num) => num !== maxx);
  let maxxx = result[0];
  for (let i = 1; i < result.length; i++) {
    if (result[i] > maxxx) {
      maxxx = result[i];
    }
  }
  const resultt = result.filter((num) => num !== maxxx);
  if (resultt.length === 0) {
    return Math.max(...nums);
  }
  return Math.max(...resultt);
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2, 2, 5, 3, 5]));
console.log(thirdMax([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7]));

// time efficient solution
const maxiThirddd = function (nums) {
  const unique_numbers = Array.from(new Set(nums));
  unique_numbers.sort((a, b) => b - a);
  return unique_numbers.length >= 3 ? unique_numbers[2] : unique_numbers[0];
};

console.log(maxiThirddd([3, 2, 1]));
console.log(maxiThirddd([1, 2]));
console.log(maxiThirddd([2, 2, 3, 1]));
console.log(maxiThirddd([1, 2, 2, 5, 3, 5]));
console.log(maxiThirddd([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7]));
