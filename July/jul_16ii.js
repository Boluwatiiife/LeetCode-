// 1037. Valid Boomerang

const isBoomerang = function (points) {
  const [A, B, C] = points;
  const [ax, ay] = A;
  const [bx, by] = B;
  const [cx, cy] = C;

  const area = Math.abs(ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) / 2;

  return area !== 0;
};

console.log(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
);
console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
