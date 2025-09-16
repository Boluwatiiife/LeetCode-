// 375. Guess Number Higher or Lower II

const getMoneyAmount = function (n) {
  const grid = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let start = n - len + 1; start >= 1; start--) {
      const end = start + len - 1;
      grid[start][end] = Infinity;
      for (let pivot = start; pivot <= end; pivot++) {
        const cost_left = pivot > start ? grid[start][pivot - 1] : 0;
        const cost_right = pivot < end ? grid[pivot + 1][end] : 0;
        grid[start][end] = Math.min(
          grid[start][end],
          pivot + Math.max(cost_left, cost_right)
        );
      }
    }
  }

  return grid[1][n];
};

console.log(getMoneyAmount(10));
console.log(getMoneyAmount(1));
console.log(getMoneyAmount(2));
