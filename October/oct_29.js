// 712. Minimum ASCII Delete Sum for Two Strings

const minimumDeleteSum = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  const word1 = s1.split("").map((ch) => ch.charCodeAt(0));
  const word2 = s2.split("").map((ch) => ch.charCodeAt(0));
  word1.unshift(0);
  word2.unshift(0);
  if (word1.length === 1) return word2.reduce((a, b) => a + b, 0);
  if (word2.length === 1) return word1.reduce((a, b) => a + b, 0);
  let grid = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = 1; i < word1.length; i++) {
    grid[i][0] = grid[i - 1][0] + word1[i];
  }
  for (let i = 1; i < word2.length; i++) {
    grid[0][i] = grid[0][i - 1] + word2[i];
  }

  for (let i = 1; i < word1.length; i++) {
    for (let j = 1; j < word2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        grid[i][j] = grid[i - 1][j - 1];
      } else {
        grid[i][j] = Math.min(
          word1[i] + grid[i - 1][j],
          word2[j] + grid[i][j - 1]
        );
      }
    }
  }

  return grid[n][m];
};

console.log(minimumDeleteSum("sea", "eat"));
console.log(minimumDeleteSum("delete", "leet"));
console.log(minimumDeleteSum("a", "b"));
console.log(minimumDeleteSum("", "abc"));
console.log(minimumDeleteSum("abc", "abc"));
console.log(minimumDeleteSum("ccaccjp", "fwosarcwge"));
