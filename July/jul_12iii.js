// 836. Rectangle Overlap

const isRectangleOverlap = function (rec1, rec2) {
  let xxx = [rec1[0], rec1[2], rec2[0], rec2[2]];
  let yyy = [rec1[1], rec1[3], rec2[1], rec2[3]];
  xxx.sort((a, b) => a - b);
  yyy.sort((a, b) => a - b);
  const xx = xxx[3] - xxx[0];
  const yy = yyy[3] - yyy[0];

  let x = Math.abs(rec1[0] - rec1[2]) + Math.abs(rec2[0] - rec2[2]);
  let y = Math.abs(rec1[1] - rec1[3]) + Math.abs(rec2[1] - rec2[3]);

  return x > xx && y > yy ? true : false;
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]));
console.log(isRectangleOverlap([5, 15, 8, 18], [0, 3, 7, 9])); // false
console.log(isRectangleOverlap([-6, -8, -3, -7], [5, -9, 6, -5])); // false
console.log(
  isRectangleOverlap(
    [-687153884, -854669644, -368882013, -788694078],
    [540420176, -909203694, 655002739, -577226067]
  )
);
