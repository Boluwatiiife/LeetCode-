// 3446. Sort Matrix by Diagonals

const sortMatrix = function (grid) {
  const n = grid.length;

  let arr = [];
  let dex = [];

  for (let row = 0; row < n; row++) {
    let temp = [];
    let col = 0;
    for (let i = row; i < n; i++) {
      temp.push(grid[i][col]);
      dex.push([i, col]);
      col++;
    }

    arr.push(temp.sort((a, b) => b - a));
  }

  for (let col = 1; col < n; col++) {
    let temp = [];
    let row = 0;
    for (let i = col; i < n; i++) {
      temp.push(grid[row][i]);
      dex.push([row, i]);
      row++;
    }
    arr.push(temp.sort((a, b) => a - b));
  }
  arr = arr.flat();

  for (let i = 0; i < arr.length; i++) {
    const [row, col] = dex[i];
    grid[row][col] = arr[i];
  }

  return grid;
};

console.log(
  sortMatrix([
    [1, 7, 3],
    [9, 8, 2],
    [4, 5, 6],
  ])
);
console.log(
  sortMatrix([
    [0, 1],
    [1, 2],
  ])
);
console.log(sortMatrix([[1]]));
