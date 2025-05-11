// 647. Palindromic Substrings

const countSubstrings = function (s) {
  const n = s.length;
  function expand(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
console.log(countSubstrings("heyeet"));
console.log(countSubstrings("he"));
