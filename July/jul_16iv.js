// 1252. Cells with Odd Values in a Matrix

const oddCells = function (m, n, indices) {
  let grid = Array.from({ length: m }, () => Array(n).fill(0));

  for (const [row, col] of indices) {
    for (let i = 0; i < grid[row].length; i++) {
      grid[row][i]++;
    }
    for (let i = 0; i < m; i++) {
      grid[i][col]++;
    }
  }
  let ans = 0;
  for (const arr of grid) {
    for (const no of arr) {
      if (no % 2 !== 0) ans++;
    }
  }

  return ans;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);
console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0],
  ])
);
console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0],
    [0, 1],
  ])
);
