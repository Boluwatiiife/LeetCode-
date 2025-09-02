// 72. Edit Distance

const minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length;
  let grid = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = 0; i <= m; i++) grid[0][i] = i;
  for (let i = 0; i <= n; i++) grid[i][0] = i;

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
      if (word2[row - 1] === word1[col - 1]) {
        grid[row][col] = grid[row - 1][col - 1];
      } else {
        grid[row][col] =
          Math.min(
            grid[row - 1][col],
            grid[row][col - 1],
            grid[row - 1][col - 1]
          ) + 1;
      }
    }
  }

  return grid[n][m];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
// console.log(minDistance("intention", "execution"));
