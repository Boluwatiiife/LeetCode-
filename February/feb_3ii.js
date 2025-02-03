// 766. Toeplitz Matrix

const isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    let arr = matrix[i];

    for (let x = 0; x < arr.length - 1; x++) {
      let nextt = matrix[i + 1]?.[x + 1];
      if (arr[x] !== nextt) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
);
console.log(
  isToeplitzMatrix([
    [8, 4, 9, 7],
    [2, 8, 4, 9],
    [1, 2, 8, 4],
  ])
);
console.log(
  isToeplitzMatrix([
    [3, 3, 2],
    [3, 3, 3],
    [1, 3, 2],
  ])
);
console.log(
  isToeplitzMatrix([
    [22, 0, 94, 45, 46, 96],
    [10, 22, 80, 94, 45, 46],
  ])
);
