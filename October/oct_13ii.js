// 983. Minimum Cost For Tickets

const mincostTickets = function (days, costs) {
  const sett = new Set(days);
  let grid = Array(366).fill(0);

  for (let i = 1; i < grid.length; i++) {
    if (sett.has(i)) {
      grid[i] = Math.min(
        costs[0] + grid[i - 1],
        costs[1] + (i - 7 < 0 ? 0 : grid[i - 7]),
        costs[2] + (i - 30 < 0 ? 0 : grid[i - 30])
      );
    } else {
      grid[i] = grid[i - 1];
    }
  }

  return grid[days[days.length - 1]];
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
console.log(
  mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])
);
