// 1035. Uncrossed Lines

const maxUncrossedLines = function (nums1, nums2) {
  const n = nums1.length,
    m = nums2.length;

  const grid = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let row = 1; row < m + 1; row++) {
    for (let col = 1; col < n + 1; col++) {
      if (nums2[row - 1] === nums1[col - 1]) {
        grid[row][col] = grid[row - 1][col - 1] + 1;
      } else {
        grid[row][col] = Math.max(grid[row][col - 1], grid[row - 1][col]);
      }
    }
  }

  return grid[m][n];
};

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]));
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]));
console.log(maxUncrossedLines([1], [3]));
console.log(maxUncrossedLines([3, 3], [3]));
