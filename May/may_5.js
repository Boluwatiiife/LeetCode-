// 3. Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = function (s) {
  const n = s.length;
  let left = 0;
  let max = 0;
  let map = new Map();

  for (let right = 0; right < n; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.get(char) > 1) {
      let left_most = s[left];
      map.set(left_most, map.get(left_most) - 1);
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcddefdsa"));
