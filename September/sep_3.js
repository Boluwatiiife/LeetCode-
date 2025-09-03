// 3643. Flip Square Submatrix Vertically

const reverseSubmatrix = function (grid, x, y, k) {
  let work = [];
  let dex = [];

  for (let row = 0; row < grid.length; row++) {
    let temp = [];
    let dexx = [];
    for (let col = 0; col < grid[0].length; col++) {
      if (row >= x && row < x + k && col >= y && col < y + k) {
        temp.push(grid[row][col]);
        dexx.push([row, col]);
      }
    }
    if (temp.length > 0) work.push(temp);
    if (dexx.length > 0) dex.push(dexx);
  }

  //   return work;
  //   return dex;

  let i = 0;
  for (let j = work.length - 1; j >= 0; j--) {
    const arr = work[j];
    const dexxx = dex[i];
    // return dexxx;
    for (let xx = 0; xx < arr.length; xx++) {
      const [row, col] = dexxx[xx];
      grid[row][col] = arr[xx];
    }
    i++;
  }

  return grid;
};

console.log(
  reverseSubmatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1,
    0,
    3
  )
);
console.log(
  reverseSubmatrix(
    [
      [3, 4, 2, 3],
      [2, 3, 4, 2],
    ],
    0,
    2,
    2
  )
);
console.log(
  reverseSubmatrix(
    [
      [4, 20, 8, 20],
      [2, 16, 3, 12],
      [3, 12, 17, 1],
      [3, 13, 2, 13],
    ],
    1,
    1,
    1
  )
);
