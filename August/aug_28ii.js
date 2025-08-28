// 1314. Matrix Block Sum

const matrixBlockSum = function (mat, k) {
  const rr = mat.length,
    cc = mat[0].length;
  for (let i = 0; i < rr; i++) {
    for (let j = 1; j < cc; j++) {
      mat[i][j] += mat[i][j - 1];
    }
  }

  for (let j = 0; j < cc; j++) {
    for (let i = 1; i < rr; i++) {
      mat[i][j] += mat[i - 1][j];
    }
  }
  mat.unshift(Array(cc).fill(0));
  mat.forEach((arr) => {
    arr.unshift(0);
  });

  let grid = Array.from({ length: rr }, () => Array(cc));
  for (let row = 0; row < rr; row++) {
    for (let col = 0; col < cc; col++) {
      let [r1, r2, c1, c2] = [
        row - k < 0 ? 0 : row - k,
        row + k > rr - 1 ? rr - 1 : row + k,
        col - k < 0 ? 0 : col - k,
        col + k > cc - 1 ? cc - 1 : col + k,
      ];
      r2++, c2++;

      const big = mat[r2][c2],
        small = mat[r1][c1];
      const coll = mat[r2][c1],
        roww = mat[r1][c2];
      const ans = big - coll - roww + small;

      grid[row][col] = ans;
    }
  }

  return grid;
};

console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2
  )
);
