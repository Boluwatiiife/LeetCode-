// 1679. Max Number of K-Sum Pairs

const maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let count = 0;

  while (left < right) {
    if (nums[left] + nums[right] > k) right--;
    else if (nums[left] + nums[right] < k) left++;
    else {
      count++;
      left++;
      right--;
    }
  }

  return count;
};

console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));
