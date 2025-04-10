// return the max sum of p consecutive elements

const sliding_window = function (nums, p) {
  let n = nums.length,
    max_sum = 0,
    curr_sum = 0;

  for (let i = 0; i < n; i++) {
    curr_sum += nums[i];

    if (i >= p - 1) {
      max_sum = Math.max(max_sum, curr_sum);
      curr_sum -= nums[i - (p - 1)];
    }
  }
  return max_sum;
};

console.log(sliding_window([2, 4, 6, 1, -2, 9, 0], 3));
console.log(sliding_window([0, 3, 1, 4, 8, 2, 11, 10, 3, 2, 5, 12, 7], 4));
console.log(sliding_window([4, 1, 6, 8, 0, 3, 1, 1, 3, 5, 0, 6], 1));
