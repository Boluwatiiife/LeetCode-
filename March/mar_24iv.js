// 3. Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = function (s) {
  let max = 0;

  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = arr.slice(i, j + 1);
      let check = new Set(temp);
      if (temp.length === check.size) {
        max = Math.max(check.size, max);
      }
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
