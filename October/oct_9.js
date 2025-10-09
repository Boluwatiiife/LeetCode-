// 813. Largest Sum of Averages

const largestSumOfAverages = function (nums, k) {
  const n = nums.length;
  prefix = [0];
  for (let i = 0; i < n; i++) prefix.push(prefix[i] + nums[i]);
  const avg = (l, r) => (prefix[r + 1] - prefix[l]) / (r - l + 1);

  let grid = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  // one group
  for (let i = 1; i <= n; i++) {
    grid[i][1] = avg(0, i - 1);
  }

  // other groups
  for (let j = 2; j <= k; j++) {
    for (let i = j; i <= n; i++) {
      for (let m = j - 1; m < i; m++) {
        grid[i][j] = Math.max(grid[i][j], grid[m][j - 1] + avg(m, i - 1));
      }
    }
  }

  return grid[n][k];
};

console.log(largestSumOfAverages([9, 1, 2, 3, 9], 3));
console.log(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7], 4));
