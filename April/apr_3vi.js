// 209. Minimum Size Subarray Sum

const minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0,
    min_length = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      min_length = Math.min(min_length, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return min_length === Infinity ? 0 : min_length;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
