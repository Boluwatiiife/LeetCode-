// 2981. Find Longest Special Substring That Occurs Thrice I

const maximumLength = function (s) {
  let n = s.length;
  let count = -1;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = s.slice(i, j + 1);
      map.set(temp, (map.get(temp) || 0) + 1);
      let set = new Set();
      for (char of temp) {
        set.add(char);
      }
      if (map.get(temp) >= 3 && set.size === 1) {
        count = Math.max(count, temp.length);
      }
    }
  }

  return count;
};

console.log(maximumLength("aaaa"));
console.log(maximumLength("abcdef"));
console.log(maximumLength("abcaba"));
console.log(maximumLength("abcdabcddddabcddddccccbbbbaaaa")); //3
