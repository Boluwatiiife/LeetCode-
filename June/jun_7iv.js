// 1658. Minimum Operations to Reduce X to Zero

const minOperations = function (nums, x) {
  const total = nums.reduce((a, b) => a + b, 0);
  let diff = total - x;
  if (diff < 0) return -1;
  if (diff === 0) return nums.length;
  let left = 0;
  let sum = 0;
  let maxx = -1;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > diff) {
      sum -= nums[left];
      left++;
    }
    if (sum === diff) {
      maxx = Math.max(maxx, right - left + 1);
    }
  }

  return maxx !== -1 ? nums.length - maxx : maxx;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
console.log(minOperations([1, 1], 3));
