// 2760. Longest Even Odd Subarray With Threshold

const longestAlternatingSubarray = function (nums, threshold) {
  let maxx = 0;
  let left = 0;

  while (left < nums.length) {
    if (nums[left] % 2 !== 0 || nums[left] > threshold) {
      left++;
      continue;
    }

    let right = left;

    while (
      right + 1 < nums.length &&
      nums[right + 1] <= threshold &&
      nums[right] % 2 !== nums[right + 1] % 2
    ) {
      right++;
    }
    maxx = Math.max(maxx, right - left + 1);
    left = right + 1;
  }
  return maxx;
};

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));
console.log(longestAlternatingSubarray([1, 2], 2));
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4));
console.log(longestAlternatingSubarray([2, 8], 4));
console.log(longestAlternatingSubarray([2, 2], 18));
console.log(longestAlternatingSubarray([1], 1));
console.log(longestAlternatingSubarray([2], 2));
console.log(longestAlternatingSubarray([2, 8], 4));
console.log(longestAlternatingSubarray([1, 10, 5], 9));
console.log(longestAlternatingSubarray([8, 1, 1], 9));
