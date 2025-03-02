// 2176. Count Equal and Divisible Pairs in an Array

const countPairs = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j] && i < j && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
console.log(countPairs([1, 2, 3, 4], 1));
