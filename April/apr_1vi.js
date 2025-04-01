// 153. Find Minimum in Rotated Sorted Array

const findMin = function (nums) {
  return Math.min(...nums);
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
