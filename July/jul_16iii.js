// 1232. Check If It Is a Straight Line

const checkStraightLine = function (coordinates) {
  if (coordinates.length < 3) return true;
  const [A, B] = [coordinates[0], coordinates[1]];
  const [ax, ay] = A;
  const [bx, by] = B;

  for (let i = 2; i < coordinates.length; i++) {
    const C = coordinates[i];
    const [cx, cy] = C;
    const area = Math.abs(ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) / 2;
    if (area !== 0) return false;
  }

  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
