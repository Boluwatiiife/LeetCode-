// 3097. Shortest Subarray With OR at Least K II

const minimumSubarrayLength = function (nums, k) {
  const n = nums.length;
  let left = 0;
  let min = Infinity;
  let sum = 0;

  for (let right = 0; right < n; right++) {
    sum |= nums[right];

    while (left <= right && sum >= k) {
      min = Math.min(min, right - left + 1);
      sum = re_compute(nums, left + 1, right);
      left++;
    }
  }

  function re_compute(arr, start, end) {
    let or_value = 0;
    for (let i = start; i <= end; i++) {
      or_value |= arr[i];
    }
    return or_value;
  }

  return min === Infinity ? -1 : min;
};

console.log(minimumSubarrayLength([1, 2, 3], 2));
console.log(minimumSubarrayLength([2, 1, 8], 10));
console.log(minimumSubarrayLength([1, 2], 0));
console.log(minimumSubarrayLength([2, 1, 9, 12], 21));
