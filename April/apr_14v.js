// 1658. Minimum Operations to Reduce X to Zero

const minOperations = function (nums, x) {
  let n = nums.length;
  let max = -1;
  let left = 0;
  let sum = 0;
  let total = nums.reduce((a, b) => a + b, 0);
  //   if (total === x) return n;

  let diff = total - x;

  for (let right = 0; right < n; right++) {
    let no = nums[right];
    sum += no;

    while (sum > diff && left <= right) {
      sum -= nums[left++];
    }

    if (sum === diff) {
      max = Math.max(max, right - left + 1);
    }
  }
  return max === -1 ? -1 : n - max;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
console.log(minOperations([1, 1, 3, 2, 5], 5));
console.log(
  minOperations(
    [
      8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993,
      9904, 8819, 1231, 6309,
    ],
    134365
  )
);
console.log(minOperations([5, 2, 3, 1, 1], 10));
