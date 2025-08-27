// 304. Range Sum Query 2D - Immutable

const NumMatrix = function (matrix, range) {
  const n = matrix.length;
  const [row1, col1, row2, col2] = range;

  let grid = Array.from({ length: n }, () => Array(1).fill(0));

  for (let i = 0; i < n; i++) {
    const arr = matrix[i];
    arr.forEach((temp) => {
      grid[i].push(temp + grid[i][grid[i].length - 1]);
    });
  }

  let ans = 0;

  for (let i = row1; i <= row2; i++) {
    const arr = grid[i];
    ans += arr[col2 + 1] - arr[col1];
  }

  return ans;
};

console.log(
  NumMatrix(
    [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ],
    [2, 1, 4, 3]
  )
);
console.log(
  NumMatrix(
    [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ],
    [1, 1, 2, 2]
  )
);
console.log(
  NumMatrix(
    [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ],
    [1, 2, 2, 4]
  )
);
