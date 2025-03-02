// 2200. Find All K-Distant Indices in an Array

const findKDistantIndices = function (nums, key, k) {
  let arr = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === key && Math.abs(i - j) <= k) {
        arr.add(i);
      }
    }
  }
  return [...arr];
};

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
