// 1901. Find a Peak Element II

const findPeakGrid = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  let top = 0;
  let bottom = m - 1;

  while (top <= bottom) {
    const midRow = Math.floor((top + bottom) / 2);

    // find index of max element in midRow
    let maxCol = 0;
    for (let j = 1; j < n; j++) {
      if (mat[midRow][j] > mat[midRow][maxCol]) {
        maxCol = j;
      }
    }

    const upVal = midRow > 0 ? mat[midRow - 1][maxCol] : -1;
    const downVal = midRow < m - 1 ? mat[midRow + 1][maxCol] : -1;
    const current = mat[midRow][maxCol];

    if (current > upVal && current > downVal) {
      return [midRow, maxCol];
    } else if (downVal > current) {
      top = midRow + 1;
    } else {
      bottom = midRow - 1;
    }
  }

  return [-1, -1];
};

console.log(
  findPeakGrid([
    [1, 4],
    [3, 2],
  ])
);
console.log(
  findPeakGrid([
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32],
  ])
);
console.log(
  findPeakGrid([
    [70, 50, 40, 30, 20],
    [100, 1, 2, 3, 4],
  ])
);
