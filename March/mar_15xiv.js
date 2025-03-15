// 2900. Longest Unequal Adjacent Groups Subsequence I

const getLongestSubsequence = function (words, groups) {
  let arr = [];
  let n = words.length;

  for (let i = 0; i < n; i++) {
    if (groups[i] !== groups[i + 1]) {
      arr.push(words[i]);
    }
  }
  return arr;
};

console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]));
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]));
console.log(getLongestSubsequence(["d"], [1]));
