// write a function tha calculates how many ways you can move from the top-left corner of a grid to the bottom-right corner, you may only move down or right

const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      const curr = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += curr;
      if (i + 1 <= m) table[i + 1][j] += curr;
    }
  }
  return table[m][n];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
