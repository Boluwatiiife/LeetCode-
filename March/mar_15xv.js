// 2903. Find Indices With Index and Value Difference I

const findIndices = function (nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (
        Math.abs(i - j) >= indexDifference &&
        Math.abs(nums[i] - nums[j]) >= valueDifference
      ) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(findIndices([5, 1, 4, 1], 2, 4));
console.log(findIndices([2, 1], 0, 0));
console.log(findIndices([1, 2, 3], 2, 4));
