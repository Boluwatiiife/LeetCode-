// 2643. Row With Maximum Ones

const rowAndMaximumOnes = function (mat) {
  let arr = [];

  for (let i = 0; i < mat.length; i++) {
    let temp = mat[i];
    let count = 0;
    for (no of temp) {
      if (no === 1) {
        count++;
      }
    }
    arr.push([count, i]);
  }
  arr = arr.sort((a, b) => b[0] - a[0]);
  let resultt = [arr[0][1], arr[0][0]];
  return resultt;
};

console.log(
  rowAndMaximumOnes([
    [0, 1],
    [1, 0],
  ])
);
console.log(
  rowAndMaximumOnes([
    [0, 0, 0],
    [0, 1, 1],
  ])
);
