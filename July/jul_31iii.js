// 3127. Make a Square with the Same Color

const canMakeSquare = function (grid) {
  function checkk(arr) {
    const ww = arr.filter((xx) => xx === "W");
    const bb = arr.filter((xx) => xx === "B");

    return ww.length > 2 || bb.length > 2;
  }
  const n = grid.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      let temp = [];
      for (let x = i; x < i + 2; x++) {
        for (let y = j; y < j + 2; y++) {
          temp.push(grid[x][y]);
        }
      }
      if (checkk(temp)) return true;
    }
  }
  return false;
};

console.log(
  canMakeSquare([
    ["B", "W", "B"],
    ["B", "W", "W"],
    ["B", "W", "B"],
  ])
);
console.log(
  canMakeSquare([
    ["B", "W", "B"],
    ["W", "B", "W"],
    ["B", "W", "B"],
  ])
);
console.log(
  canMakeSquare([
    ["B", "W", "B"],
    ["B", "W", "W"],
    ["B", "W", "W"],
  ])
);
