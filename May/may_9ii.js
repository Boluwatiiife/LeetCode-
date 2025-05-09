// 581. Shortest Unsorted Continuous Subarray

const findUnsortedSubarray = function (nums) {
  const n = nums.length;
  let left = 0,
    right = 0;
  let min = Infinity,
    max = -Infinity;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) right = i;
  }

  for (let i = n - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) left = i;
  }

  return right === 0 ? 0 : right - left + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1, 2, 3, 4]));
console.log(findUnsortedSubarray([1, 2, 5, 3, 4]));
console.log(findUnsortedSubarray([1]));
console.log(findUnsortedSubarray([2, 3, 3, 2, 4]));
console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));
