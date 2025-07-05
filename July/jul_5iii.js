// 598. Range Addition II

const maxCount = function (m, n, ops) {
  if (ops.length < 1) return m * n;

  let one = Infinity;
  let two = Infinity;
  for (let [a, b] of ops) {
    one = Math.min(one, a);
    two = Math.min(two, b);
  }
  return one * two;
};

console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
  ])
);
console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
  ])
);
console.log(maxCount(3, 3, []));
console.log(maxCount(39999, 39999, [[19999, 19999]]));
console.log(
  maxCount(26, 17, [
    [20, 10],
    [26, 11],
    [2, 11],
    [4, 16],
    [2, 3],
    [23, 13],
    [7, 15],
    [11, 11],
    [25, 13],
    [11, 13],
    [13, 11],
    [13, 16],
    [26, 17],
  ])
);
console.log(
  maxCount(18, 3, [
    [16, 1],
    [14, 3],
    [14, 2],
    [4, 1],
    [10, 1],
    [11, 1],
    [8, 3],
    [16, 2],
    [13, 1],
    [8, 3],
    [2, 2],
    [9, 1],
    [3, 1],
    [2, 2],
    [6, 3],
  ])
);
