// 64. Minimum Path Sum

const minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;

  let griddd = Array.from({ length: m }, () => Array(n));
  griddd[0][0] = grid[0][0];

  for (let i = 1; i < n; i++) {
    griddd[0][i] = griddd[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < m; i++) {
    griddd[i][0] = griddd[i - 1][0] + grid[i][0];
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      griddd[row][col] =
        grid[row][col] + Math.min(griddd[row - 1][col], griddd[row][col - 1]);
    }
  }

  return griddd[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [2,1,4],
    [9,6,2],
    [1,4,3],
  ])
);
