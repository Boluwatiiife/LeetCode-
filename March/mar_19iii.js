// 3099. Harshad Number

const sumOfTheDigitsOfHarshadNumber = function (x) {
  let num = x.toString().split("").map(Number);

  let temp = num.reduce((a, b) => a + b, 0);
  return x % temp === 0 ? temp : -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18));
console.log(sumOfTheDigitsOfHarshadNumber(23));
