// 2140. Solving Questions With Brainpower

const mostPoints = function (questions) {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    const next_index = Math.min(i + brainpower + 1, n);
    dp[i] = Math.max(points + dp[next_index], dp[i + 1]);
  }

  return dp[0];
};

console.log(
  mostPoints([
    [3, 2],
    [4, 3],
    [4, 4],
    [2, 5],
  ])
);
console.log(
  mostPoints([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
  ])
);
console.log(
  mostPoints([
    [21, 5],
    [92, 3],
    [74, 2],
    [39, 4],
    [58, 2],
    [5, 5],
    [49, 4],
    [65, 3],
  ])
);
