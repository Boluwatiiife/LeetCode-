// 3090. Maximum Length Substring With Two Occurrences

const maximumLengthSubstring = function (s) {
  let maxx = 0;
  for (let start = 0; start < s.length; start++) {
    for (let end = start + 1; end <= s.length; end++) {
      let temp = s.substring(start, end);
      let freqq = new Map();
      for (char of temp) {
        freqq.set(char, (freqq.get(char) || 0) + 1);
      }
      let count = 0;
      for (cha of temp) {
        if (freqq.get(cha) <= 2) {
          count++;
        }
      }
      if (count === temp.length) {
        maxx = Math.max(maxx, count);
      }
    }
  }
  return maxx;
};

console.log(maximumLengthSubstring("bcbbbcba"));
console.log(maximumLengthSubstring("aaaa"));
console.log(maximumLengthSubstring("eebadadbfa"));
console.log(maximumLengthSubstring("bcbbababaa"));
