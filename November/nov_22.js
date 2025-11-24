// 62. Unique Paths

const uniquePaths = function (m, n) {
  let grid = Array.from({ length: m - 1 }, () => Array(n).fill());
  let one = Array(n).fill(1);
  grid.unshift(one);
  grid.forEach((arr) => {
    arr[0] = 1;
  });

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
    }
  }

  return grid[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(12, 19));
console.log(uniquePaths(19, 12));
console.log(uniquePaths(19, 24));
console.log(uniquePaths(19, 324));
console.log(uniquePaths(19, 233));
