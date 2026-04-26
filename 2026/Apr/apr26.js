// 3908. Valid Digit Number

const validDigit = function (n, x) {
  const num = n.toString();
  const xx = x.toString();

  if (num[0] === xx) return false;
  return num.includes(xx);
};

console.log(validDigit(101, 0));
console.log(validDigit(232, 2));
console.log(validDigit(5, 1));
console.log(validDigit(17, 7));
