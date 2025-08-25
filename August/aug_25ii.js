// 498. Diagonal Traverse

const findDiagonalOrder = function (mat) {
  const row = mat.length;
  const col = mat[0].length;
  const total = row * col;
  const ans = Array(total);

  let r = 0,
    c = 0;

  for (let i = 0; i < total; i++) {
    ans[i] = mat[r][c];

    if ((r + c) % 2 === 0) {
      // moving up-right
      if (c === col - 1) {
        // hit right boundary => go down
        r++;
      } else if (r === 0) {
        // hit top boundary => go right
        c++;
      } else {
        // normal move up-right
        r--;
        c++;
      }
    } else {
      // moving down-left
      if (r === row - 1) {
        // hit bottom boundary => go right
        c++;
      } else if (c === 0) {
        // hit left boundary => go down
        r++;
      } else {
        // normal move down-left
        r++;
        c--;
      }
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
); // [1,2,6,7,3,4,8,9,5,10]
console.log(findDiagonalOrder([[1], [2], [3]]));
console.log(
  findDiagonalOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
