// 2938. Separate Black and White Balls

const minimumSteps = function (s) {
  const n = s.length;
  let ans = 0;
  let zero = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") zero++;
    if (s[i] === "1") ans += zero;
  }
  return ans;
};

console.log(minimumSteps("101"));
console.log(minimumSteps("100"));
console.log(minimumSteps("0111"));
console.log(minimumSteps("1010111"));
