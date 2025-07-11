// 812. Largest Triangle Area

const largestTriangleArea = function (points) {
  let ans = 0;

  function area(A, B, C) {
    return (
      Math.abs(
        A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1])
      ) / 2
    );
  }

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const a = area(points[i], points[j], points[k]);
        ans = Math.max(ans, a);
      }
    }
  }
  return ans;
};

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
);
console.log(
  largestTriangleArea([
    [1, 0],
    [0, 0],
    [0, 1],
  ])
);
console.log(
  largestTriangleArea([
    [4, 6],
    [6, 5],
    [3, 1],
  ])
); // 5.5000
