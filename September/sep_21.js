// 542. 01 Matrix

const updateMatrix = function (mat) {
  const rr = mat.length;
  const cc = mat[0].length;

  let arr = Array.from({ length: rr }, () => Array(cc).fill(Infinity));
  for (let i = 0; i < rr; i++) {
    for (let j = 0; j < cc; j++) {
      if (mat[i][j] === 0) arr[i][j] = 0;
      else {
        if (i > 0) {
          arr[i][j] = Math.min(arr[i - 1][j] + 1, arr[i][j]);
        }
        if (j > 0) {
          arr[i][j] = Math.min(arr[i][j - 1] + 1, arr[i][j]);
        }
      }
    }
  }

  for (let i = rr - 1; i >= 0; i--) {
    for (let j = cc - 1; j >= 0; j--) {
      if (i < rr - 1) {
        arr[i][j] = Math.min(arr[i][j], arr[i + 1][j] + 1);
      }
      if (j < cc - 1) {
        arr[i][j] = Math.min(arr[i][j], arr[i][j + 1] + 1);
      }
    }
  }

  return arr;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
console.log(
  updateMatrix([
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
