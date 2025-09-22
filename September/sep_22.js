// 3674. Minimum Operations to Equalize Array

const minOperations = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) return 1;
  }
  return 0;
};

console.log(minOperations([1, 2]));
console.log(minOperations([5, 5, 5]));
