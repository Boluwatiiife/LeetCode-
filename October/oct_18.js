// 3397. Maximum Number of Distinct Elements After Operations

const maxDistinctElements = function (nums, k) {
  nums.sort((a, b) => a - b);
  let nextAvailable = -Infinity;
  let count = 0;

  for (const num of nums) {
    const val = Math.max(num - k, nextAvailable);
    if (val <= num + k) {
      count++;
      nextAvailable = val + 1;
    }
  }

  return count;
};

console.log(maxDistinctElements([1, 2, 2, 3, 3, 4], 2));
console.log(maxDistinctElements([4, 4, 4, 4], 1));
console.log(maxDistinctElements([4, 4, 4, 4], 0));
console.log(maxDistinctElements([1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5], 3));
console.log(maxDistinctElements([10, 10, 10, 5, 10], 1));
