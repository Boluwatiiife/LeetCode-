// 1827. Minimum Operations to Make the Array Increasing

const minOperations = function (nums) {
  let sum = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      let temp = nums[i];
      nums[i] = nums[i - 1] + 1;
      sum += nums[i] - temp;
    }
  }
  return sum;
  return nums;
};

console.log(minOperations([1, 1, 1]));
console.log(minOperations([1, 5, 2, 4, 1]));
console.log(minOperations([8]));
console.log(minOperations([4, 8, 3, 5, 4]));
