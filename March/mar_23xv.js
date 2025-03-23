// 3487. Maximum Unique Subarray Sum After Deletion

const maxSum = function (nums) {
  let arr = [...new Set(nums)];

  if (arr.every((xx) => xx < 0)) return Math.max(...nums);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }

  return arr.reduce((a, b) => a + b, 0);
};

console.log(maxSum([1, 2, 3, 4, 5]));
console.log(maxSum([1, 1, 0, 1, 1]));
console.log(maxSum([1, 2, -1, -2, 1, 0, -1]));
console.log(maxSum([-17, -15]));
console.log(maxSum([-100]));
