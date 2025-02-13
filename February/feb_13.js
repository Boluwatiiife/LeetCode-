// 1337. The K Weakest Rows in a Matrix

const kWeakestRows = function (mat, k) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    let nums = mat[i];
    let ones = 0;
    for (xx of nums) {
      if (xx === 1) {
        ones += 1;
      }
    }
    arr.push(ones);
  }
  let result = [];
  let i = 0;
  while (i < arr.length) {
    if (result.length === k) return result;
    if (arr[i] === Math.min(...arr)) {
      result.push(i);
      arr[i] = Infinity;
      i = 0;
    } else {
      i++;
    }
  }
  return result;
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
);
