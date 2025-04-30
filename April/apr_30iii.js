// 2730. Find the Longest Semi-Repetitive Substring

const longestSemiRepetitiveSubstring = function (s) {
  let n = s.length;
  let left = 0;
  let max = 1;
  let last_pair = 0;

  for (let right = 1; right < n; right++) {
    if (s[right] === s[right - 1]) {
      if (last_pair) left = last_pair;
      last_pair = right;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(longestSemiRepetitiveSubstring("52233"));
console.log(longestSemiRepetitiveSubstring("5494"));
console.log(longestSemiRepetitiveSubstring("1111111"));
