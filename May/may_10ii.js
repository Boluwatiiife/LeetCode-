// 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros

const minSum = function (nums1, nums2) {
  let one = nums1.filter((xx) => xx === 0).length;
  let two = nums2.filter((xx) => xx === 0).length;

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) nums1[i] = 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] === 0) nums2[i] = 1;
  }

  let sum11 = nums1.reduce((a, b) => a + b, 0);
  let sum22 = nums2.reduce((a, b) => a + b, 0);
  if (sum11 < sum22 && one === 0) return -1;
  if (sum22 < sum11 && two === 0) return -1;

  return Math.max(sum11, sum22);
};

console.log(minSum([3, 2, 0, 1, 0], [6, 5, 0]));
console.log(minSum([2, 0, 2, 0], [1, 4]));
