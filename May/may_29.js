// 3132. Find the Integer Added to Array II

const minimumAddedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  function check(x) {
    let [i, j, count] = [0, 0, 0];
    while (i < nums1.length && j < nums2.length) {
      if (nums2[j] - nums1[i] !== x) {
        count++;
      } else {
        j++;
      }
      i++;
    }
    return count <= 2;
  }
  let ans = Infinity;
  for (let i = 0; i < 3; i++) {
    const x = nums2[0] - nums1[i];
    if (check(x)) {
      ans = Math.min(ans, x);
    }
  }
  return ans;
};

console.log(minimumAddedInteger([4, 20, 16, 12, 8], [14, 18, 10]));
console.log(minimumAddedInteger([3, 5, 5, 3], [7, 7]));
console.log(minimumAddedInteger([9, 9, 1, 1, 1], [5, 5, 5]));
console.log(
  minimumAddedInteger([4, 6, 3, 1, 4, 2, 10, 9, 5], [5, 10, 3, 2, 6, 1, 9])
);
console.log(
  minimumAddedInteger([10, 2, 8, 7, 5, 6, 7, 10], [5, 8, 5, 3, 8, 4])
);
console.log(
  minimumAddedInteger([3, 3, 5, 5, 7, 7, 9, 9], [8, 10, 10, 12, 14, 14])
);
