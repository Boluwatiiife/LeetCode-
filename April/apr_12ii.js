// 643. Maximum Average Subarray I

findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxx = -Infinity;
  let n = nums.length;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  //   return sum;
  maxx = Math.max(maxx, sum);
  let left = 0;
  for (let i = k; i < n; i++) {
    sum -= nums[left];
    sum += nums[i];
    maxx = Math.max(maxx, sum);
    left++;
  }

  return maxx / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([1, 2, 3, 4], 2));
console.log(findMaxAverage([-1], 1));
