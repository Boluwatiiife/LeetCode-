// 1979. Find Greatest Common Divisor of Array

const findGCD = function (nums) {
  let minn = Math.min(...nums);
  let maxx = Math.max(...nums);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  return gcd(minn, maxx);
};

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
console.log(findGCD([3, 3]));
