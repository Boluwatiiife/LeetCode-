// 3402. Minimum Operations to Make Columns Strictly Increasing

const minimumOperations = function (grid) {
  let sum = 0;
  let n = grid[0].length;

  for (let i = 0; i < n; i++) {
    let temp = grid.map((row) => row[i]);
    for (let j = 1; j < temp.length; j++) {
      if (temp[j] <= temp[j - 1]) {
        let xx = temp[j];
        let diff = Math.abs(temp[j] - temp[j - 1]);
        neww = diff + 1;
        sum += neww;
        temp[j] = neww + xx;
      }
    }
  }
  return sum;
};

console.log(
  minimumOperations([
    [3, 2],
    [1, 3],
    [3, 4],
    [0, 1],
  ])
);
console.log(
  minimumOperations([
    [3, 2, 1],
    [2, 1, 0],
    [1, 2, 3],
  ])
);
