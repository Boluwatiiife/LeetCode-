// 2923. Find Champion I

const findChampion = function (grid) {
  let n = grid.length;
  let champ = 0;

  for (let i = 1; i < n; i++) {
    if (grid[i][champ] === 1) {
      champ = i;
    }
  }
  return champ;
};

console.log(
  findChampion([
    [0, 1],
    [0, 0],
  ])
);
console.log(
  findChampion([
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
