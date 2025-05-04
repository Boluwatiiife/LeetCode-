// 3325. Count Substrings With K-Frequency Characters I

const numberOfSubstrings = function (s, k) {
  const n = s.length;
  let left = 0;
  let count = 0;
  let map = new Map();

  for (let right = 0; right < n; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);
    while (map.get(char) === k) {
      count += n - right;
      let left_most = s[left];
      map.set(left_most, map.get(left_most) - 1);
      left++;
    }
  }
  return count;
};

console.log(numberOfSubstrings("abacb", 2));
console.log(numberOfSubstrings("abcde", 1));
console.log(numberOfSubstrings("ajsrhoebe", 2));
console.log(numberOfSubstrings("ajseexrhoebe", 3));
