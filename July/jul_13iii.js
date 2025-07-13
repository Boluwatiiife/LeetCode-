// 867. Transpose Matrix

const transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(matrix[j][i]);
    }
    ans.push(temp);
  }

  return ans;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
