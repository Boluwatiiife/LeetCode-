// 378. Kth Smallest Element in a Sorted Matrix

const kthSmallest = function (matrix, k) {
  matrix = matrix.flat();
  matrix.sort((a, b) => a - b);

  return matrix[k - 1];
};

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);
console.log(kthSmallest([[-5]], 1));
console.log(
  kthSmallest(
    [
      [1, 2],
      [1, 3],
    ],
    2
  )
);
