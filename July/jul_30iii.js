// 2373. Largest Local Values in a Matrix

const largestLocal = function (grid) {
  const n = grid.length;
  let ans = [];

  for (let i = 0; i < n - 2; i++) {
    let row = [];
    for (let j = 0; j < n - 2; j++) {
      let maxx = 0;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          maxx = Math.max(maxx, grid[x][y]);
        }
      }
      row.push(maxx);
    }
    ans.push(row);
  }
  return ans;
};

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);
console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
