// 3532. Path Existence Queries in a Graph I
const pathExistenceQueries = function (n, nums, maxDiff, queries) {
  const group = new Array(n).fill(0);
  let currentGroup = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] > maxDiff) {
      currentGroup++;
    }
    group[i] = currentGroup;
  }

  const res = [];
  for (const [u, v] of queries) {
    res.push(group[u] === group[v]);
  }

  return res;
};

console.log(
  pathExistenceQueries(2, [1, 3], 1, [
    [0, 0],
    [0, 1],
  ])
);
console.log(
  pathExistenceQueries(4, [2, 5, 6, 8], 2, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ])
);
