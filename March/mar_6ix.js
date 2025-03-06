// 2319. Check if Matrix Is X-Matrix

const checkXMatrix = function (grid) {
  let diago = [],
    non_diago = [];
  let n = grid.length;
  let m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === j || i + j === n - 1) {
        let num = grid[i][j];
        if (num === 0) {
          return false;
        }
      } else {
        let num = grid[i][j];
        if (num !== 0) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ])
);
console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ])
);
