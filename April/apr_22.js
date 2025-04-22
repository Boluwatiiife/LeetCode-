// 424. Longest Repeating Character Replacement

const characterReplacement = function (s, k) {
  let n = s.length;
  let left = 0,
    maxx = 0;
  const freq = {};

  for (let right = 0; right < n; right++) {
    const char = s[right];
    freq[char] = (freq[char] || 0) + 1;
    maxx = Math.max(maxx, freq[char]);

    if (right - left + 1 - maxx > k) {
      freq[s[left]]--;
      left++;
    }
  }

  return n - left;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
