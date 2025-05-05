// 718. Maximum Length of Repeated Subarray

const findLength = function (nums1, nums2) {
  let max = 0;
  const [rows, cols] = [nums1.length, nums2.length],
    dp = Array(rows + 1)
      .fill()
      .map(() => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (nums1[i] === nums2[j]) {
        max = Math.max(max, (dp[i + 1][j + 1] = dp[i][j] + 1));
      }
    }
  }
  return max;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
