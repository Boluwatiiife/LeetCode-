// 583. Delete Operation for Two Strings

const minDistance = function (word1, word2) {
  const one = word1.length;
  const two = word2.length;

  let grid = Array.from({ length: one + 1 }, () => Array(two + 1).fill(0));

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        grid[i][j] = grid[i - 1][j - 1] + 1;
      } else {
        grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }
  const dex = grid[one][two];

  return one - dex + (two - dex);
};

console.log(minDistance("sea", "eat"));
console.log(minDistance("leetcode", "etco"));
console.log(minDistance("qwer", "qwert"));
