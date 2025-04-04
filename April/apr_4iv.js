// 643. Maximum Average Subarray I

const findMaxAverage = function (nums, k) {
  let n = nums.length;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max_sum = sum;

  for (let i = k; i < n; i++) {
    sum = sum - nums[i - k] + nums[i];
    max_sum = Math.max(max_sum, sum);
  }

  return max_sum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([-1], 1));
