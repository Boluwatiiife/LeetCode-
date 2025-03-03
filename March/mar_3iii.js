// 2215. Find the Difference of Two Arrays

const findDifference = function (nums1, nums2) {
  let first = new Set();
  let second = new Set();

  for (char of nums1) {
    if (!nums2.includes(char)) {
      first.add(char);
    }
  }
  for (char of nums2) {
    if (!nums1.includes(char)) {
      second.add(char);
    }
  }

  return [[...first], [...second]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
console.group(findDifference([-68, -80, -19, -94, 82, 21, -43], [-63]));
