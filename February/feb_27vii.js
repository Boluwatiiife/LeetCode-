// 2032. Two Out of Three

const twoOutOfThree = function (nums1, nums2, nums3) {
  let arr = [];

  for (num of nums2) {
    if (nums1.includes(num)) {
      arr.push(num);
    }
  }
  for (num of nums3) {
    if (nums2.includes(num)) {
      arr.push(num);
    }
  }
  for (num of nums3) {
    if (nums1.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
