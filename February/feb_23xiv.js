// 1848. Minimum Distance to the Target Element

const getMinDistance = function (nums, target, start) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(Math.abs(i - start));
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      result.push(Math.abs(i - start));
    }
  }
  return Math.min(...result);
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9));
