// 1572. Matrix Diagonal Sum

const diagonalSum = function (mat) {
  let nums = [];

  for (let i = 0; i < mat.length; i++) {
    let arr = mat[i];
    nums.push(arr[i]);
    nums.push(arr[arr.length - (i + 1)]);
  }
  if (mat[0].length % 2 !== 0) {
    let minuss = nums.length / 2;
    nums.splice(minuss, 1);
  }
  return nums.reduce((a, b) => a + b);
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
console.log(diagonalSum([[5]]));
