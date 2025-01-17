/** 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = function (nums, target) {
  const seen = new Map();
  let result = null;
  let number = null;

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      result = [seen.get(complement), i];
      number = [complement, nums[i]];
    }
    seen.set(nums[i], i);
  }
  console.log(number);
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
