// 3105. Longest Strictly Increasing or Strictly Decreasing Subarray

const longestMonotonicSubarray = function (nums) {
  let max_count = 1;
  let curr_count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      curr_count++;
      max_count = Math.max(max_count, curr_count);
    } else {
      curr_count = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      curr_count++;
      max_count = Math.max(max_count, curr_count);
    } else {
      curr_count = 1;
    }
  }
  return max_count;
};

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));
console.log(longestMonotonicSubarray([3, 3, 3, 3]));
console.log(longestMonotonicSubarray([3, 2, 1]));
