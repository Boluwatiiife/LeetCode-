// 396. Rotate Function

const maxRotateFunction = function (nums) {
  const n = nums.length;
  let sum = nums.reduce((a, b) => a + b, 0);

  let xx = 0;
  for (let i = 0; i < n; i++) {
    xx += nums[i] * i;
  }

  let ans = xx;
  for (let i = 1; i < n; i++) {
    xx = xx + sum - n * nums[n - i];
    ans = Math.max(ans, xx);
  }

  return ans;
};

console.log(maxRotateFunction([4, 3, 2, 6]));
console.log(maxRotateFunction([100]));
