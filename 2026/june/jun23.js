// 3945. Digit Frequency Score

const digitFrequencyScore = function (n) {
  const arr = n
    .toString()
    .split("")
    .map((xx) => Number(xx));

  let freq = new Map();
  for (const no of arr) freq.set(no, (freq.get(no) || 0) + 1);

  const nums = [...freq.keys()];
  let ans = 0;

  for (const no of nums) ans += no * freq.get(no);

  return ans;
};

console.log(digitFrequencyScore(122));
console.log(digitFrequencyScore(101));
