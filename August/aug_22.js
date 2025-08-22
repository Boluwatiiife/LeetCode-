// 3195. Find the Minimum Area to Cover All Ones I

const minimumArea = function (grid) {
  let one_row = Infinity,
    two_row = 0,
    one_col = Infinity,
    two_col = 0;

  for (let i = 0; i < grid[0].length; i++) {
    let coll = [];
    for (let j = 0; j < grid.length; j++) {
      const roww = grid[j];

      if (roww.includes(1)) {
        one_row = Math.min(one_row, roww.indexOf(1));
        two_row = Math.max(two_row, roww.lastIndexOf(1));
      }

      coll.push(grid[j][i]);
    }
    if (coll.includes(1)) {
      one_col = Math.min(one_col, coll.indexOf(1));
      two_col = Math.max(two_col, coll.lastIndexOf(1));
    }
  }

  return (Math.abs(two_row - one_row) + 1) * (Math.abs(two_col - one_col) + 1);
};

console.log(
  minimumArea([
    [0, 1, 0],
    [1, 0, 1],
  ])
);
console.log(
  minimumArea([
    [1, 0],
    [0, 0],
  ])
);
console.log(
  minimumArea([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 1],
  ])
);
console.log(minimumArea([[0], [1]]));
console.log(minimumArea([[0, 1]]));
