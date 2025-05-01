// 2831. Find the Longest Equal Subarray

const longestEqualSubarray = function (nums, k) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(0);
  let max = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    max = Math.max(max, ++dp[nums[right]]);

    if (max + k <= right - left) dp[nums[left++]]--;
  }

  return max;
};

console.log(longestEqualSubarray([1, 3, 2, 3, 1, 3], 3));
console.log(longestEqualSubarray([1, 1, 2, 2, 1, 1], 2));
