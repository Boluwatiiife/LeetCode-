// 395. Longest Substring with At Least K Repeating Characters

const longestSubstring = function (s, k) {
  const helper = (str) => {
    if (str.length === 0) return 0;
    let count = new Map();
    for (let char of str) {
      count.set(char, (count.get(char) || 0) + 1);
    }

    for (let i = 0; i < str.length; i++) {
      if (count.get(str[i]) < k) {
        let left = helper(str.slice(0, i));
        let right = helper(str.slice(i + 1));
        return Math.max(left, right);
      }
    }
    return str.length;
  };
  return helper(s);
};

console.log(longestSubstring("aaabb", 3));
console.log(longestSubstring("ababbc", 2));
console.log(longestSubstring("ababbacaaabbbb", 3));
console.log(longestSubstring("ababacb", 3));
console.log(longestSubstring("bbaaacbd", 3));
