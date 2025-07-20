// 1637. Widest Vertical Area Between Two Points Containing No Points

const maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let ans = 0;

  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i - 1];
    const [xx, yy] = points[i];

    ans = Math.max(ans, xx - x);
  }

  return ans;
};

console.log(
  maxWidthOfVerticalArea([
    [8, 7],
    [9, 9],
    [7, 4],
    [9, 7],
  ])
);
console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
);
