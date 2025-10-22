// 1043. Partition Array for Maximum Sum

const maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  let grid = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxVal = 0;
    for (let len = 1; len <= k && i - len >= 0; len++) {
      maxVal = Math.max(maxVal, arr[i - len]);
      grid[i] = Math.max(grid[i], grid[i - len] + maxVal * len);
    }
  }

  return grid[n];
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4));
console.log(maxSumAfterPartitioning([1], 1));
console.log(maxSumAfterPartitioning([1, 3, 31], 1));
