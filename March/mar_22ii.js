// 3364. Minimum Positive Sum Subarray

const minimumSumSubarray = function (nums, l, r) {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    for (let j = l; j <= r; j++) {
      let temp = nums.slice(i, j + i);
      if (temp.length === j) {
        let sum = temp.reduce((a, b) => a + b, 0);
        if (sum > 0) {
          min = Math.min(sum, min);
        }
      }
    }
  }
  return min !== Infinity ? min : -1;
};

console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3));
console.log(minimumSumSubarray([-2, 2, -3, 1], 2, 3));
console.log(minimumSumSubarray([1, 2, 3, 4], 2, 4));
console.log(minimumSumSubarray([5, 8, -6], 1, 3));
console.log(minimumSumSubarray([-12, 8], 1, 1));
