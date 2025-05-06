// 5. Longest Palindromic Substring

const longestPalindrome = function (s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i + 1]) {
      let left = i,
        right = j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ccxcddds"));
