// 3503. Longest Palindrome After Substring Concatenation I

const longestPalindrome = function (s, t) {
  function substrings(word) {
    const n = word.length;
    let arr = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (word.slice(i, j + 1) !== "") {
          arr.push(word.slice(i, j + 1));
        }
      }
    }
    return arr;
  }
  function palindrome(word) {
    const n = word.length;
    let left = 0,
      right = n - 1;
    while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  let one = substrings(s);
  let two = substrings(t);
  one.push("");
  two.push("");
  let max = 0;
  for (const xx of one) {
    for (const yy of two) {
      const temp = xx + yy;
      if (palindrome(temp)) {
        max = Math.max(max, temp.length);
      }
    }
  }
  return max;
};

console.log(longestPalindrome("a", "a"));
console.log(longestPalindrome("abc", "def"));
console.log(longestPalindrome("b", "aaaa"));
console.log(longestPalindrome("abcde", "ecdba"));
