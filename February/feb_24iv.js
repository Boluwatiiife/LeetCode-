// 1876. Substrings of Size Three with Distinct Characters

const countGoodSubstrings = function (s) {
  let substrings = [];

  for (let i = 0; i < s.length - 2; i++) {
    substrings.push([s[i], s[i + 1], s[i + 2]]);
  }
  let sum = 0;
  for (arr of substrings) {
    let count = new Set(arr);
    if (count.size === 3) {
      sum++;
    }
  }
  return sum;
};

console.log(countGoodSubstrings("xyzzaz"));
console.log(countGoodSubstrings("aababcabc"));
