// 2679. Sum in a Matrix

const matrixSum = function (nums) {
  const n = nums.length;
  nums.forEach((arr) => {
    arr.sort((a, b) => b - a);
  });

  let ans = 0;

  for (let i = 0; i < nums[0].length; i++) {
    let maxx = 0;
    for (let row = 0; row < n; row++) {
      maxx = Math.max(maxx, nums[row][i]);
    }
    ans += maxx;
  }

  return ans;
};
[
  [7, 2, 1],
  [6, 4, 2],
  [6, 5, 3],
  [3, 2, 1],
];

console.log(
  matrixSum([
    [7, 2, 1],
    [6, 4, 2],
    [6, 5, 3],
    [3, 2, 1],
  ])
);
console.log(matrixSum([[1]]));
