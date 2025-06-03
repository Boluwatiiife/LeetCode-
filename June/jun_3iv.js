// 81. Search in Rotated Sorted Array II

const search = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const temp = nums[mid];
    if (temp === target) return true;
    else if (temp > target) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
