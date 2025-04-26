// 1297. Maximum Number of Occurrences of a Substring

const maxFreq = function (s, maxLetters, minSize, maxSize) {
  const map = new Map();
  const char_count = new Map();
  let left = 0;
  let count = 0;

  for (let right = 0; right < s.length; right++) {
    const right_char = s[right];
    char_count.set(right_char, (char_count.get(right_char) || 0) + 1);

    if (right - left + 1 > minSize) {
      const left_char = s[left];
      char_count.set(left_char, char_count.get(left_char) - 1);
      if (char_count.get(left_char) === 0) char_count.delete(left_char);
      left++;
    }

    if (right - left + 1 === minSize && char_count.size <= maxLetters) {
      const substring = s.substring(left, right + 1);
      map.set(substring, (map.get(substring) || 0) + 1);
      count = Math.max(count, map.get(substring));
    }
  }
  return count;
};

console.log(maxFreq("aababcaab", 2, 3, 4));
console.log(maxFreq("aaaa", 1, 3, 3));
console.log(maxFreq("abcde", 2, 3, 3));
