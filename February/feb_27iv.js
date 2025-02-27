// 2016. Maximum Difference Between Increasing Elements

const maximumDifference = function (nums) {
  let min_val = nums[0];
  let min_diff = -1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min_val) {
      min_diff = Math.max(min_diff, nums[i] - min_val);
    } else {
      min_val = nums[i];
    }
  }
  return min_diff;
};

console.log(maximumDifference([7, 1, 5, 4]));
console.log(maximumDifference([9, 4, 3, 2]));
console.log(maximumDifference([1, 5, 2, 10]));
