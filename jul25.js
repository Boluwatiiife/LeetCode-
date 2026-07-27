// 3536. Maximum Product of Two Digits

const maxProduct = function (n) {
  const arr = n
    .toString()
    .split("")
    .map((x) => Number(x))
    .sort((a, b) => b - a);

  return arr[0] * arr[1];
};

console.log(maxProduct(31));
console.log(maxProduct(22));
console.log(maxProduct(124));
