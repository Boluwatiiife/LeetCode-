// 516. Longest Palindromic Subsequence

const longestPalindromeSubseq = function (s) {
  const n = s.length;
  let grid = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    grid[i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;

      if (s[i] === s[j]) {
        grid[i][j] = 2 + grid[i + 1][j - 1];
      } else {
        grid[i][j] = Math.max(grid[i + 1][j], grid[i][j - 1]);
      }
    }
  }

  return grid[0][n - 1];
};

console.log(longestPalindromeSubseq("bbbab"));
console.log(longestPalindromeSubseq("cbbd"));
