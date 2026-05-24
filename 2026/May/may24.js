// 463. Island Perimeter

const islandPerimeter = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let ans = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        ans += 4;
        if (row - 1 >= 0 && grid[row - 1][col] === 1) ans--;
        if (col - 1 >= 0 && grid[row][col - 1] === 1) ans--;
        if (row + 1 < m && grid[row + 1][col] === 1) ans--;
        if (col + 1 < n && grid[row][col + 1] === 1) ans--;
      }
    }
  }
  return ans;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
