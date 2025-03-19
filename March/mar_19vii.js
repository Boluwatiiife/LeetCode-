// 3131. Find the Integer Added to Array I

const addedInteger = function (nums1, nums2) {
  return Math.min(...nums2) - Math.min(...nums1);
};

console.log(addedInteger([2, 6, 4], [9, 7, 5]));
console.log(addedInteger([10], [5]));
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1]));
