// 1913. Maximum Product Difference Between Two Pairs

const maxProductDifference = function (nums) {
  let arr = nums.sort((a, b) => a - b);

  return arr[arr.length - 1] * arr[arr.length - 2] - arr[0] * arr[1];
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
