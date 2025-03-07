// 2357. Make Array Zero by Subtracting Equal Amounts

const minimumOperations = function (nums) {
  const uniquee = new Set(nums.filter((xx) => xx > 0));

  return uniquee.size;
};

console.log(minimumOperations([1, 5, 0, 3, 5]));
console.log(minimumOperations([0]));
console.log(minimumOperations([0, 9, 9, 8, 4, 4]));
console.log(minimumOperations([0, 9, 9, , 4, 4, 3, 8, 4, 4]));
