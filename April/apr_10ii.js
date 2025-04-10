// 209. Minimum Size Subarray Sum

const minSubArrayLen = function (target, nums) {
  let sum = 0,
    left = 0,
    minn = Infinity,
    n = nums.length;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    while (sum >= target) {
      minn = Math.min(minn, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minn === Infinity ? 0 : minn;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 2]));
console.log(minSubArrayLen(9, [1, 1, 2, 5, 2]));
console.log(minSubArrayLen(12, [1, 3, 3, 5, 10, 2]));
console.log(minSubArrayLen(7, [1, 1, 1, 1, 7]));
