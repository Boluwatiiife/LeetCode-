// 696. Count Binary Substrings

const countBinarySubstrings = function (s) {
  const n = s.length;
  let prev = 0;
  let curr = 1;
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (s[i] === s[i - 1]) {
      curr++;
    } else {
      count += Math.min(prev, curr);
      prev = curr;
      curr = 1;
    }
  }
  count += Math.min(prev, curr);
  return count;
};

console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("10101"));
