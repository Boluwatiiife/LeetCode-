// 3142. Check if Grid Satisfies Conditions

const satisfiesConditions = function (grid) {
  let col = grid[0].length;
  let row = grid.length;
  for (let i = 0; i < col; i++) {
    let temp = [];
    for (let j = 0; j < row; j++) {
      let xx = grid[j];
      for (let x = 0; x < xx.length; x++) {
        if (xx[x] === xx[x + 1]) {
          return false;
        }
      }
      temp.push(grid[j][i]);
      for (let k = 0; k < temp.length - 1; k++) {
        if (temp[k] !== temp[k + 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  satisfiesConditions([
    [1, 0, 2],
    [1, 0, 2],
  ])
);
console.log(
  satisfiesConditions([
    [1, 1, 1],
    [0, 0, 0],
  ])
);
console.log(satisfiesConditions([[1], [2], [3]]));
