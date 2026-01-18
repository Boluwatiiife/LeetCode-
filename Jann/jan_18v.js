// 3774. Absolute Difference Between Maximum and Minimum K Elements

const absDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let one = 0,
    two = 0;

  for (let i = 0; i < k; i++) one += nums[i];
  for (let i = n - 1; i >= n - k; i--) two += nums[i];

  return Math.abs(one - two);
};

console.log(absDifference([5, 2, 2, 4], 2));
console.log(absDifference([100], 1));
