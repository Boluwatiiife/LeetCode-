// 1143. Longest Common Subsequence

const longestCommonSubsequence = function (text1, text2) {
  const one = text1.length,
    two = text2.length;
  let grid = Array.from({ length: two + 1 }, () => Array(one + 1).fill(0));

  for (let row = 1; row < two + 1; row++) {
    for (let col = 1; col < one + 1; col++) {
      if (text2[row - 1] === text1[col - 1]) {
        grid[row][col] = grid[row - 1][col - 1] + 1;
      } else {
        grid[row][col] = Math.max(grid[row][col - 1], grid[row - 1][col]);
      }
    }
  }

  return grid[two][one];
};

console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("abc", "abc"));
console.log(longestCommonSubsequence("abc", "def"));
