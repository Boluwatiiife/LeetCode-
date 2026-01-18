// 3745. Maximize Expression of Three Elements

const maximizeExpressionOfThree = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  return nums[n - 1] + nums[n - 2] - nums[0];
};

console.log(maximizeExpressionOfThree([1, 4, 2, 5]));
console.log(maximizeExpressionOfThree([-2, 0, 5, -2, 4]));
