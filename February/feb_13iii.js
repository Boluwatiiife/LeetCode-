// 1351. Count Negative Numbers in a Sorted Matrix

const countNegatives = function (grid) {
  let anss = 0;
  for (let i = 0; i < grid.length; i++) {
    let arr = grid[i];
    for (num of arr) {
      if (num < 0) {
        anss++;
      }
    }
  }
  return anss;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
);
