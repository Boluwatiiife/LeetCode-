// 63. Unique Paths II

const uniquePathsWithObstacles = function (oogrid) {
  if (oogrid[0][0] === 1) return 0;
  const m = oogrid.length,
    n = oogrid[0].length;
  let grid = Array.from({ length: m - 1 }, () => Array(n));
  let one = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (oogrid[0][i] === 1) {
      one[i] = 0;
      break;
    }
    one[i] = 1;
  }
  grid.unshift(one);

  let side = Array(m).fill(0);
  for (let row = 0; row < m; row++) {
    if (oogrid[row][0] === 1) {
      side[row][0] = 0;
      break;
    }
    side[row] = 1;
  }

  for (let row = 1; row < m; row++) {
    grid[row][0] = side[row];
    for (let col = 1; col < n; col++) {
      if (oogrid[row][col] === 1) {
        grid[row][col] = 0;
      } else {
        grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
      }
    }
  }

  return grid[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ])
);
