// 2905. Find Indices With Index and Value Difference II

const findIndices = function (nums, indexDifference, valueDifference) {
  const n = nums.length;

  let mindex = 0,
    maxdex = 0;

  for (let j = indexDifference; j < n; j++) {
    let i = j - indexDifference;

    if (nums[i] < nums[mindex]) mindex = i;
    if (nums[i] > nums[maxdex]) maxdex = i;

    if (Math.abs(nums[j] - nums[mindex]) >= valueDifference) {
      return [mindex, j];
    }
    if (Math.abs(nums[j] - nums[maxdex]) >= valueDifference) {
      return [maxdex, j];
    }
  }
  return [-1, -1];
};

console.log(findIndices([5, 1, 4, 1], 2, 4));
console.log(findIndices([2, 1], 0, 0));
console.log(findIndices([1, 2, 3], 2, 4));
console.log(findIndices([6, 5, 5, 10, 4, 3], 1, 5));
console.log(findIndices([0, 4, 7, 2], 2, 7));
console.log(findIndices([7], 0, 0));
