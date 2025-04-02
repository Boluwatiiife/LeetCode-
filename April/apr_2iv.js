// 172. Factorial Trailing Zeroes

const trailingZeroes = function (n) {
  let count = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(0));
console.log(trailingZeroes(30));
console.log(trailingZeroes(50));
