// 977. Squares of a Sorted Array

const sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  //   return nums;
  return nums.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
