// 2033. Minimum Operations to Make a Uni-Value Grid
// same question as the previous one, but a more optimized solution

const minOperations = function (grid, x) {
  let nums = grid.flat();

  // check of all elems have the same remainder when divided by x
  let remm = nums[0] % x;
  if (!nums.every((no) => no % x === remm)) return -1;

  // sort to find the median
  nums = nums.sort((a, b) => a - b);
  let n = Math.floor(nums.length / 2);
  let ave = nums[n];

  // cacullate total operations
  return nums.reduce((counts, num) => counts + Math.abs(num - ave) / x, 0);
};

console.log(
  minOperations(
    [
      [2, 4],
      [6, 8],
    ],
    2
  )
);
console.log(
  minOperations(
    [
      [1, 5],
      [2, 3],
    ],
    1
  )
);
console.log(
  minOperations(
    [
      [1, 2],
      [3, 4],
    ],
    2
  )
);
console.log(
  minOperations(
    [
      [529, 529, 989],
      [989, 529, 345],
      [989, 805, 69],
    ],
    92
  )
);
