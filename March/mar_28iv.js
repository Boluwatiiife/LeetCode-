// 48. Rotate Image

const rotate = function (matrix) {
  let n = matrix.length;
  let arr = [];

  for (let col = 0; col < n; col++) {
    let temp = [];
    for (let row = 0; row < n; row++) {
      temp.push(matrix[row][col]);
    }
    temp = temp.reverse();
    arr.push(temp);
  }
  for (let i = 0; i < n; i++) {
    matrix[i] = arr[i];
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
