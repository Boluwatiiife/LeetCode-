// 1877. Minimize Maximum Pair Sum in Array

const minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let max = 0;

  while (left < right) {
    max = Math.max(max, nums[left] + nums[right]);
    left++;
    right--;
  }

  return max;
};

console.log(minPairSum([3, 5, 2, 3]));
console.log(minPairSum([3, 5, 4, 2, 4, 6]));
