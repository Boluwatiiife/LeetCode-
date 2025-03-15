// 2824. Count Pairs Whose Sum is Less than Target

const countPairs = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] < target) {
        count++;
      }
    }
  }
  return count / 2;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));
