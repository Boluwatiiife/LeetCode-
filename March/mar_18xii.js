// 3065. Minimum Operations to Exceed Threshold Value I

const minOperations = function (nums, k) {
  let count = 0;

  for (no of nums) {
    if (no < k) {
      count++;
    }
  }
  return count;
};

console.log(minOperations([2, 11, 10, 1, 3], 10));
console.log(minOperations([1, 1, 2, 4, 9], 1));
console.log(minOperations([1, 1, 2, 4, 9], 9));
