// 27. Remove Element

const removeElement = function (nums, val) {
  const n = nums.length;
  let i = 0;

  for (let j = 0; j < n; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
