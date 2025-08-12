// 1266. Minimum Time Visiting All Points

const minTimeToVisitAllPoints = function (points) {
  let ans = 0;

  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];

    ans += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }

  return ans;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ])
);
