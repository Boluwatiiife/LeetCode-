// 1446 Consecutive Characters

const maxPower = function (s) {
  let maxx = 1,
    curr = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr++;
    } else {
      curr = 1;
    }
    maxx = Math.max(curr, maxx);
  }
  return maxx;
};

console.log(maxPower("leetcode"));
console.log(maxPower("abbcccddddeeeeedcba"));
console.log(maxPower("bbboommf"));
console.log(maxPower("cc"));
