// 1975. Maximum Matrix Sum

const maxMatrixSum = function (matrix) {
  const n = matrix.length;
  let grid = [];

  //   matrix.forEach((arr) => {
  for (const arr of matrix) {
    let dex = [];
    for (let i = 1; i < arr.length; i++) {
      if (
        (arr[i] < 0 && arr[i - 1] < 0) ||
        (arr[i] < 0 && arr[i - 1] === 0) ||
        (arr[i] === 0 && arr[i - 1] < 0)
      ) {
        dex.push([arr[i] + arr[i - 1], [i - 1, i]]);
      }
    }
    return dex;
  }

  //   for (let col = 0; col < n; col++) {
  //     let temp = [];
  //     for (let row = 0; row < n; row++) {
  //       temp.push(matrix[row][col]);
  //     }
  //     for (let i = 1; i < temp.length; i++) {
  //       if (temp[i] < 0 && temp[i - 1] < 0) {
  //         matrix[i - 1][col] *= -1;
  //         matrix[i][col] *= -1;
  //       }
  //     }
  //   }

  //   return matrix.flat().reduce((a, b) => a + b);
};

console.log(
  maxMatrixSum([
    [1, -1],
    [-1, 1],
  ])
);
console.log(
  maxMatrixSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ])
);
console.log(
  maxMatrixSum([
    [-1, 0, -1],
    [-2, 1, 3],
    [3, 2, 2],
  ])
);
console.log(
  maxMatrixSum([
    [1, -0, 1],
    [2, 1, 3],
    [3, 2, 2],
  ])
);
