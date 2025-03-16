// 2956. Find Common Elements Between Two Arrays

const findIntersectionValues = function (nums1, nums2) {
  let resultt = [0, 0];
  let n = Math.max(nums1.length, nums2.length);

  let i = 0;
  while (i < n) {
    if (nums2.includes(nums1[i])) {
      resultt[0]++;
    }
    if (nums1.includes(nums2[i])) {
      resultt[1]++;
    }

    i++;
  }
  return resultt;
};

console.log(findIntersectionValues([2, 3, 2], [1, 2]));
console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]));
console.log(findIntersectionValues([3, 4, 2, 3], [1, 5]));
