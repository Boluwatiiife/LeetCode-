// 2044. Count Number of Maximum Bitwise-OR Subsets

const countMaxOrSubsets = function (nums) {
  function bitwisee(arr) {
    return arr.reduce((a, b) => a | b, 0);
  }
  let maxx = bitwisee(nums);
  let count = 0;

  let ans = [[]];
  for (const num of nums) {
    const newSubset = [];

    for (const temp of ans) {
      const candidate = [...temp, num];

      newSubset.push(candidate);
      if (bitwisee(candidate) === maxx) count++;
    }
    ans.push(...newSubset);
  }

  return count;
};

console.log(countMaxOrSubsets([3, 1]));
console.log(countMaxOrSubsets([2, 2, 2]));
console.log(countMaxOrSubsets([3, 2, 1, 5]));
