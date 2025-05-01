// 2875. Minimum Size Subarray in Infinite Array

const minSizeSubarray = function (nums, target) {
  const total = nums.reduce((a, b) => a + b, 0);
  const n = nums.length;

  const full_rounds = Math.floor(target / total);
  const remaining = target % total;

  let left = 0;
  let max = Infinity;
  let sum = 0;

  for (let right = 0; right < 2 * n; right++) {
    sum += nums[right % n];

    while (sum > remaining && left <= right) {
      sum -= nums[left % n];
      left++;
    }
    if (sum === remaining) {
      max = Math.min(max, right - left + 1);
    }
  }
  if (remaining === 0) return full_rounds * n;

  return max === Infinity ? -1 : full_rounds * n + max;
};

console.log(minSizeSubarray([1, 2, 3], 5));
console.log(minSizeSubarray([1, 1, 1, 2, 3], 4));
console.log(minSizeSubarray([2, 4, 6, 8], 3));
console.log(minSizeSubarray([1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1], 83));
console.log(minSizeSubarray([2, 5, 6, 4], 95));
