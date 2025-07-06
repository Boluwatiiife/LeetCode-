// 661. Image Smoother

const imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const ans = Array.from({ length: m }, () => Array(n).fill(0));
  const dirs = [-1, 0, 1];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      let count = 0;

      for (let dx of dirs) {
        for (let dy of dirs) {
          const x = i + dx;
          const y = j + dy;

          if (x >= 0 && x < m && y >= 0 && y < n) {
            sum += img[x][y];
            count++;
          }
        }
      }
      ans[i][j] = Math.floor(sum / count);
    }
  }

  return ans;
};

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
console.log(
  imageSmoother([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ])
);
console.log(
  imageSmoother([
    [100, 200],
    [200, 50],
    [100, 200],
    [100, 400],
  ])
);
console.log(
  imageSmoother([
    [1, 2],
    [3, 4],
  ])
);
