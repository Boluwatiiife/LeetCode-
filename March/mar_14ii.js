// 2778. Sum of Squares of Special Elements

const sumOfSquares = function (nums) {
  let sum = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (nums.length % i === 0) {
      sum = sum + nums[i - 1] * nums[i - 1];
    }
  }
  return sum;
};

console.log(sumOfSquares([1, 2, 3, 4]));
console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
