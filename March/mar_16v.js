// 2932. Maximum Strong Pair XOR I

const maximumStrongPairXor = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        max = Math.max(max, nums[i] ^ nums[j]);
      }
    }
  }
  return max;
};

console.log(maximumStrongPairXor([1, 2, 3, 4, 5]));
console.log(maximumStrongPairXor([10, 100]));
console.log(maximumStrongPairXor([5, 6, 25, 30]));
