// 263. Ugly Number

const isUgly = function (n) {
  if (n <= 0) return false;

  for (const prime of [2, 3, 5]) {
    while (n % prime === 0) {
      n /= prime;
    }
  }
  return n === 1;
};

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
console.log(isUgly(-2147483648));
console.log(isUgly(50));
console.log(isUgly(101));
console.log(isUgly(937351770));
console.log(isUgly(307));
