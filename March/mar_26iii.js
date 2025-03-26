// 34. Find First and Last Position of Element in Sorted Array

const searchRange = function (nums, target) {
  let arr = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      arr[0] = i;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      arr[1] = i;
      break;
    }
  }
  return arr;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
console.log(searchRange([1], 1));
console.log(searchRange([1, 4], 4));
