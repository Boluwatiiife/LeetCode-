// 53. Maximum Subarray

const maxSubArray = function (nums) {
  let maxx = nums[0];
  let curr_sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr_sum = Math.max(nums[i], curr_sum + nums[i]);
    maxx = Math.max(maxx, curr_sum);
  }

  return maxx;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-3, -2, -2, -3]));
