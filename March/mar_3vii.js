// 2161. Partition Array According to Given Pivot

const pivotArray = function (nums, pivot) {
  let lesser = [],
    equal = [],
    greater = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      lesser.push(nums[i]);
    }
    if (nums[i] === pivot) {
      equal.push(nums[i]);
    }
    if (nums[i] > pivot) {
      greater.push(nums[i]);
    }
  }
  return [...lesser, ...equal, ...greater];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));
