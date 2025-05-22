// 1855. Maximum Distance Between a Pair of Values

const maxDistance = function (nums1, nums2) {
  let i = 0,
    j = 0;
  let max = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      max = Math.max(max, j - i);
      j++;
    } else {
      i++;
    }
  }
  return max;
};

console.log(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]));
console.log(maxDistance([2, 2, 2], [10, 10, 1]));
console.log(maxDistance([30, 29, 19, 5], [25, 25, 25, 25, 25]));
