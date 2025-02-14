// 1380. Lucky Numbes in a Matrix

const luckyNumbers = function (matrix) {
  let colm_max = [];

  for (let col = 0; col < matrix[0].length; col++) {
    let columnValues = [];
    for (let row = 0; row < matrix.length; row++) {
      columnValues.push(matrix[row][col]);
    }
    colm_max.push(Math.max(...columnValues));
  }
  let resultt = [];
  for (let i = 0; i < matrix.length; i++) {
    if (colm_max.includes(Math.min(...matrix[i]))) {
      resultt.push(Math.min(...matrix[i]));
    }
  }
  return resultt;
};

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
);
console.log(
  luckyNumbers([
    [7, 8],
    [1, 2],
  ])
);
console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
