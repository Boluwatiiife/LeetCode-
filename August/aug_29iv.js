// 746. Min Cost Climbing Stairs

const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let ans = Array(n + 2).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    ans[i] = cost[i] + Math.min(ans[i + 1], ans[i + 2]);
  }

  return Math.min(ans[0], ans[1]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
