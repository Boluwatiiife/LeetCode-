// 2784. Check if Array is Good

const isGood = function (nums) {
  const n = nums.length;
  const max = Math.max(...nums);
  nums.sort((a, b) => a - b);
  if (max !== n - 1) return false;
  if (nums[n - 1] !== max) return false;
  if (nums[n - 2] !== max) return false;
  if (nums[0] !== 1) return false;

  for (let i = 1; i < n - 2; i++) if (nums[i] <= nums[i - 1]) return false;
  return true;
};

console.log(isGood([2, 1, 3]));
console.log(isGood([1, 3, 3, 2]));
console.log(isGood([1, 1]));
console.log(isGood([3, 4, 4, 1, 2, 1]));
console.log(isGood([1, 1, 1]));
