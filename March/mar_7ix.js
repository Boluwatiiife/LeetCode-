// 2032. Two Out of Three

const twoOutOfThree = function (nums1, nums2, nums3) {
  let arr = [];

  for (xx of nums1) {
    for (yy of nums2) {
      if (xx === yy) {
        arr.push(xx);
      }
    }
  }
  //   return arr;
  for (xx of nums1) {
    for (yy of nums3) {
      if (xx === yy && !arr.includes(xx)) {
        arr.push(xx);
      }
    }
  }
  for (xx of nums2) {
    for (yy of nums3) {
      if (xx === yy && !arr.includes(xx)) {
        arr.push(xx);
      }
    }
  }

  return [...new Set(arr)];
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
