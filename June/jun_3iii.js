// 34. Find First and Last Position of Element in Sorted Array

const searchRange = function (nums, target) {
  const n = nums.length;

  // function to find the leftmost index
  function leftmost(nums, target) {
    let left = 0;
    let right = n - 1;
    let dex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const no = nums[mid];
      if (no >= target) right = mid - 1;
      else if (no < target) left = mid + 1;
      if (no === target) dex = mid;
    }
    return dex;
  }

  // function to find the rightmost index
  function rightmost(nums, target) {
    let left = 0;
    let right = n - 1;
    let dex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const no = nums[mid];
      if (no <= target) left = mid + 1;
      else if (no > target) right = mid - 1;
      if (no === target) dex = mid;
    }
    return dex;
  }

  return [leftmost(nums, target), rightmost(nums, target)];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
console.log(searchRange([1], 1));
