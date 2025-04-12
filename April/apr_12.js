// 713. Subarray Product Less Than K

const numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let count = 0;
  let n = nums.length;
  let prod = 1;
  let left = 0;

  for (let right = 0; right < n; right++) {
    prod *= nums[right];

    while (prod >= k) {
      prod /= nums[left];
      left++;
    }
    count += right - left + 1;
  }

  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
console.log(numSubarrayProductLessThanK([0, 0, 0, 0], 0));
console.log(numSubarrayProductLessThanK([1, 2, 3, 4, 5], 15));
