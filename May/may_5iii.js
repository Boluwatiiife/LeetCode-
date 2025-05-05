// 26. Remove Duplicates from Sorted Array

const removeDuplicates = function (nums) {
  const n = nums.length;
  let i = 0;

  for (let j = 1; j < n; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
