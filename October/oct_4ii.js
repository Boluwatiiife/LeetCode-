// 698. Partition to K Equal Sum Subsets

const canPartitionKSubsets = function (nums, k) {
  const total = nums.reduce((a, b) => a + b, 0);
  const targ = total / k;
  if (total % k !== 0) return false;
  nums = nums.sort((a, b) => b - a);

  return nums;
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
console.log(canPartitionKSubsets([1, 2, 3, 4], 3));
