// 3536. Maximum Product of Two Digits

const maxProduct = function (n) {
  const nums = n
    .toString()
    .split("")
    .map((xx) => Number(xx))
    .sort((a, b) => b - a);

  return nums[0] * nums[1];
};

console.log(maxProduct(31));
console.log(maxProduct(22));
console.log(maxProduct(124));
