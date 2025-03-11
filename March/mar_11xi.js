// 2639. Find the Width of Columns of a Grid

const findColumnWidth = function (grid) {
  const roww = grid.length;
  const colm = grid[0].length;

  let resultt = [];
  for (let col = 0; col < colm; col++) {
    let temp = [];
    for (let ro = 0; ro < roww; ro++) {
      temp.push(grid[ro][col].toString());
    }
    let maxx = 0;
    for (char of temp) {
      maxx = Math.max(maxx, char.length);
    }
    resultt.push(maxx);
  }
  return resultt;
};

console.log(findColumnWidth([[1], [22], [333]]));
console.log(
  findColumnWidth([
    [-15, 1, 3],
    [15, 7, 12],
    [5, 6, -2],
  ])
);
