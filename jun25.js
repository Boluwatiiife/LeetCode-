// 3963. Create Grid With Exactly One Path

const createGrid = function (m, n) {
  let grid = Array.from({ length: m }, () => new Array(n).fill("#"));
  for (let i = 0; i < n; i++) grid[0][i] = ".";
  for (let i = 0; i < m; i++) grid[i][n - 1] = ".";

  let ans = [];
  for (const arr of grid) ans.push(arr.join(""));

  return ans;
};

console.log(createGrid(2, 3));
console.log(createGrid(3, 3));
console.log(createGrid(1, 4));
