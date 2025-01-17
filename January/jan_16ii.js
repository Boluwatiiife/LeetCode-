// 283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === 0 && (nums[j + 1] < 0 || nums[j + 1] > 0)) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 3, -4, 0, 3, 1]));

// more time efficient solution.
const zeros_to_the_back = function (nums) {
  let non_zero_index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[non_zero_index] = nums[i];
      non_zero_index++;
    }
  }
  for (let i = non_zero_index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
console.log(zeros_to_the_back([0, 1, 0, 3, 12]));
console.log(zeros_to_the_back([0]));
console.log(zeros_to_the_back([0, 3, -4, 0, 3, 1]));
