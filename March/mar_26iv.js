// 2033. Minimum Operations to Make a Uni-Value Grid

const minOperations = function (grid, x) {
  let nums = grid.flat();

  nums = nums.sort((a, b) => a - b);
  let n = Math.floor(nums.length / 2);
  let ave = nums[n];

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    if (temp !== ave) {
      if (temp > ave) {
        let no = temp;
        while (no > ave) {
          no -= x;
          count++;
        }
        nums[i] = no;
      }
      if (temp < ave) {
        let no = temp;
        while (no < ave) {
          no += x;
          count++;
        }
        nums[i] = no;
      }
    }
  }
  nums = new Set(nums);
  return nums.size === 1 ? count : -1;
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
