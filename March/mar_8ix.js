// 2427. Number of Common Factors

const commonFactors = function (a, b) {
  let minn = Math.min(a, b);

  let count = 0;
  for (let i = 1; i <= minn; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }

  return count;
};

console.log(commonFactors(12, 6));
console.log(commonFactors(25, 30));
console.log(commonFactors(44, 64));
