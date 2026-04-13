// 1848. Minimum Distance to the Target Element

const getMinDistance = function (nums, target, start) {
  const n = nums.length;
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    if (nums[i] === target) ans = Math.min(ans, Math.abs(i - start));
  }

  return ans;
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
