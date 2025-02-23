// 1837. Sum of Digits in Base K

const sumBase = function (n, k) {
  let num = n.toString(k);
  num = num.split("").map(Number);

  return num.reduce((a, b) => a + b);
};

console.log(sumBase(34, 6));
console.log(sumBase(10, 10));
