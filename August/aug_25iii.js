// 498. Diagonal Traverse

const findDiagonalOrder = function (mat) {
  const row = mat.length;
  const col = mat[0].length;
  const total = row * col;
  let ans = Array(total);

  let r = 0,
    c = 0;

  for (let i = 0; i < total; i++) {
    ans[i] = mat[r][c];

    if ((r + c) % 2 === 0) {
      // going up
      if (c === col - 1) r++;
      else if (r === 0) c++;
      else r--, c++;
    } else {
      // going down
      if (r === row - 1) c++;
      else if (c === 0) r++;
      else r++, c--;
    }
  }

  return ans;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  findDiagonalOrder([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ])
);
