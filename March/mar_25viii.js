// 29. Divide Two Integers

const divide = function (dividend, divisor) {
  const int_min = -(2 ** 31);
  const int_max = 2 ** 31 - 1;

  let num = Math.trunc(dividend / divisor);

  if (num > int_max) return int_max;
  if (num < int_min) return int_min;

  return num;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-7, 3));
console.log(divide(-7, -3));
console.log(divide(-2147483648, -1));
