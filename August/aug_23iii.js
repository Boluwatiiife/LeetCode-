// 53. Maximum Subarray

const maxSubArray = function (nums) {
  let ans = nums[0];
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const no = nums[i];
    curr = Math.max(no, curr + no);
    ans = Math.max(ans, curr);
  }

  return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
