// 377. Combination Sum IV

const combinationSum4 = function (nums, target) {
  let ans = Array(target + 1).fill(0);
  ans[0] = 1;

  for (let tar = 1; tar <= target; tar++) {
    for (let i = 0; i < nums.length; i++) {
      if (tar - nums[i] >= 0) {
        ans[tar] += ans[tar - nums[i]];
      }
    }
  }

  return ans[target];
};

console.log(combinationSum4([1, 2, 3], 4));
console.log(combinationSum4([1, 1], 8));
console.log(combinationSum4([9], 3));
