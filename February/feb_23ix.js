// 1822. Sign of the Product of an Array

const arraySign = function (nums) {
  let product = 1;
  for (xx of nums) {
    product = product * xx;
  }
  if (product > 0) return 1;
  if (product < 0) return -1;
  return 0;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
