// 2643. Row With Maximum Ones

const rowAndMaximumOnes = function (mat) {
  const n = mat.length;
  let ans = [0, 0];

  for (let i = 0; i < n; i++) {
    const arr = mat[i];
    let count = 0;
    for (no of arr) if (no === 1) count++;
    if (count > ans[1]) ((ans[0] = i), (ans[1] = count));
  }

  return ans;
};

console.log(
  rowAndMaximumOnes([
    [0, 1],
    [1, 0],
  ]),
);
console.log(
  rowAndMaximumOnes([
    [0, 0, 0],
    [0, 1, 1],
  ]),
);
console.log(
  rowAndMaximumOnes([
    [0, 0],
    [1, 1],
    [0, 0],
  ]),
);
