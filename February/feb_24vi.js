// 1893. Check if All the Integers in a Range Are Covered

const isCovered = function (ranges, left, right) {
  let rang = [];
  for (arr of ranges) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      rang.push(i);
    }
  }

  let nums = [];
  for (let i = left; i <= right; i++) {
    nums.push(i);
  }

  for (digit of nums) {
    if (!rang.includes(digit)) {
      return false;
    }
  }
  return true;
};

console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5
  )
);
console.log(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21
  )
);
console.log(
  isCovered(
    [
      [1, 4],
      [7, 10],
    ],
    7,
    10
  )
);
