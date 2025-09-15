// 343. Integer Break

const integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;

  let rem = 3;

  while (rem < n) {
    if (rem + 3 > n) break;
    rem += 3;
  }
  let diff = n - rem;
  let ans = 1;
  for (let i = 0; i < rem / 3; i++) {
    ans *= 3;
  }
  if (diff === 2) ans *= 2;
  if (diff === 1) {
    ans = ans / 3;
    ans *= 4;
  }

  return ans;
};

console.log(integerBreak(2));
console.log(integerBreak(7));
console.log(integerBreak(8));
console.log(integerBreak(9));
console.log(integerBreak(10));
console.log(integerBreak(11));
console.log(integerBreak(5));
console.log(integerBreak(14));
