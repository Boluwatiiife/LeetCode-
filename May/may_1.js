// 2779. Maximum Beauty of an Array After Applying Operation

const maximumBeauty = function (nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let left = 0;
  let max = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] - nums[left] <= 2 * k) {
      max = Math.max(max, right - left + 1);
    } else left++;
  }
  return max;
};

console.log(maximumBeauty([4, 6, 1, 2], 2));
console.log(maximumBeauty([1, 1, 1, 1], 10));
console.log(maximumBeauty([75, 15, 9], 28));
