// 1582. Special Positions in a Binary Matrix

const numSpecial = function (mat) {
  let row = mat.length,
    col = mat[0].length;
  let rowSum = new Array(row).fill(0);
  let colSum = new Array(col).fill(0);
  //   return colSum;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1) {
        rowSum[i]++;
        colSum[j]++;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1 && rowSum[i] === 1 && colSum[j] === 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
);
console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  numSpecial([
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);
console.log(
  numSpecial([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ])
);
