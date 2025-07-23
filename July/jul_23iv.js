// 1779. Find Nearest Point That Has the Same X or Y Coordinate

const nearestValidPoint = function (x, y, points) {
  let anss = -1;
  let min = Infinity;

  for (let i = 0; i < points.length; i++) {
    const [xx, yy] = points[i];
    if (xx === x || yy === y) {
      const diff = Math.abs(xx - x) + Math.abs(yy - y);
      if (diff < min) {
        anss = i;
        min = diff;
      }
    }
  }

  return anss;
};

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
);
console.log(nearestValidPoint(3, 4, [[3, 4]]));
console.log(nearestValidPoint(3, 4, [[2, 3]]));
