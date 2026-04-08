// longest common subsequence in two words

const longestSubsequence = function (word1, word2) {
  const one = word1.length;
  const two = word2.length;

  let grid = Array.from({ length: two + 1 }, () => Array(one + 1).fill(0));

  for (let i = 0; i < one; i++) {
    for (let j = 0; j < two; j++) {
      if (word1[i] === word2[j]) {
        grid[i][j] = grid[i - 1][j - 1] + 1;
      } else {
        grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }

  return grid;
};

console.log(longestSubsequence("abcdaf", "acbcf")); // abcf
console.log(longestSubsequence("abcdaf", "acbcfee")); // abcf
console.log(longestSubsequence("abcdaf", "acbcfee")); // abcf
