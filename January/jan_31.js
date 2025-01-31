// 643. Maximum Average Subarray I

const findMaxAverage = function (nums, k) {
  let summ = 0;
  for (let i = 0; i < k; i++) {
    summ = summ + nums[i];
  }
  let max_sum = summ;
  for (let i = k; i < nums.length; i++) {
    summ = summ - nums[i - k] + nums[i];
    max_sum = Math.max(max_sum, summ);
  }
  return max_sum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([3, 2, -2, -2, 2, 1, 5], 3));
