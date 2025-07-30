// 2373. Largest Local Values in a Matrix

const largestLocal = function (grid) {
  const n = grid.length;
  const m = (n - 3 + 1) * (n - 3 + 1);
  let root = Math.sqrt(m);
  let result = [];
  let yoo = [];

  let dex = 0;
  while (grid.length >= 3) {
    let scope = [];
    while (dex <= grid[0].length - 3) {
      const use = dex + 3;
      for (let i = dex; i < use; i++) {
        let temp = [];
        for (let j = 0; j < 3; j++) {
          temp.push(grid[j][i]);
        }
        scope.push(temp);
        if (scope.length === 3) {
          let temp = [];
          for (let arr of scope) {
            temp.push(...arr);
          }
          yoo.push(Math.max(...temp));
          if (yoo.length === root) {
            result.push(yoo);
            yoo = [];
          }
          scope = [];
        }
      }
      dex++;
    }
    grid.shift();
    dex = 0;
  }
  return result;
};

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);
console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);

const largestLocall = function (grid) {
  const n = grid.length;
  const ans = [];

  for (let i = 0; i < n - 2; i++) {
    const row = [];
    for (let j = 0; j < n - 2; j++) {
      let max_val = 0;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          max_val = Math.max(max_val, grid[x][y]);
        }
      }
      row.push(max_val);
    }
    ans.push(row);
  }

  return ans;
};

console.log(
  largestLocall([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);
console.log(
  largestLocall([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
