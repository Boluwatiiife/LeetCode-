// 3356. Zero Array Transformation II

const minZeroArray = function (nums, queries) {
  if (nums.reduce((a, b) => a + b) === 0) return 0;
  let count = 0;
  for (let i = 0; i < queries.length; i++) {
    let temp = queries[i];
    for (let x = 0; x < nums.length; x++) {
      if (x >= temp[0] && x <= temp[1]) {
        if (nums[x] <= temp[2]) {
          nums[x] = 0;
        } else if (nums[x] > temp[2]) {
          nums[x] = nums[x] - temp[2];
        }
      }
    }
    count++;
    if (nums.reduce((a, b) => a + b) === 0) {
      break;
    }
  }
  return nums.reduce((a, b) => a + b) === 0 ? count : -1;
};

// my code worked for 623/629 test case, and it failed the other cases because if the time limit.

console.log(
  minZeroArray(
    [2, 0, 2],
    [
      [0, 2, 1],
      [0, 2, 1],
      [1, 1, 3],
    ]
  )
);
console.log(
  minZeroArray(
    [4, 3, 2, 1],
    [
      [1, 3, 2],
      [0, 2, 1],
    ]
  )
);
console.log(
  minZeroArray(
    [5],
    [
      [0, 0, 5],
      [0, 0, 1],
      [0, 0, 3],
      [0, 0, 2],
    ]
  )
);
