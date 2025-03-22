// 3375. Minimum Operations to Make Array Values Equal to K

const minOperations = function (nums, k) {
  let arr = [...new Set(nums)];

  let count = 0;

  for (no of arr) {
    if (no < k) return -1;
    if (no > k) count++;
  }
  return count;
};

console.log(minOperations([5, 2, 5, 4, 5], 2));
console.log(minOperations([2, 1, 2], 2));
console.log(minOperations([9, 7, 5, 3], 1));
console.log(minOperations([1], 1));
console.log(minOperations([6, 9, 2, 2], 5));
