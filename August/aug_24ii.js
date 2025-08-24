// 518. Coin Change II

const change = function (amount, coins) {
  let grid = Array.from({ length: coins.length + 1 }, () =>
    Array(amount + 1).fill(0)
  );
  grid.forEach((arr) => (arr[0] = 1));
  let i = 1;

  for (let row = 1; row < grid.length; row++) {
    let coin = coins[i - 1];
    let one = grid[row];

    for (let j = 1; j < one.length; j++) {
      const no = j;
      const upp = grid[i - 1][j];
      let diff = no - coin;
      const rowww = grid[i][diff];

      if (diff < 0) {
        grid[i][j] = upp;
      } else {
        grid[i][j] = rowww + upp;
      }
    }
    i++;
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(change(5, [1, 2, 5]));
console.log(change(3, [2]));
console.log(change(10, [10]));
