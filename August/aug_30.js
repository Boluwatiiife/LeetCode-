// 36. Valid Sudoku

const isValidSudoku = function (board) {
  function checkLocation(row, col) {
    if (row >= 0 && row <= 2 && col >= 0 && col <= 2) return 0;
    else if (row >= 0 && row <= 2 && col >= 3 && col <= 5) return 1;
    else if (row >= 0 && row <= 2 && col >= 6 && col <= 8) return 2;
    else if (row >= 3 && row <= 5 && col >= 0 && col <= 2) return 3;
    else if (row >= 3 && row <= 5 && col >= 3 && col <= 5) return 4;
    else if (row >= 3 && row <= 5 && col >= 6 && col <= 8) return 5;
    else if (row >= 6 && row <= 8 && col >= 0 && col <= 2) return 6;
    else if (row >= 6 && row <= 8 && col >= 3 && col <= 5) return 7;
    else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) return 8;
  }

  function duplicate(arr) {
    let sett = new Set();
    for (const no of arr) {
      sett.add(no);
    }
    return sett.size !== arr.length;
  }

  const n = board.length;
  let grid = Array.from({ length: n }, () => []);

  for (let col = 0; col < n; col++) {
    const rr = board[col].filter((xx) => !isNaN(xx)).map((xx) => Number(xx));
    if (duplicate(rr)) return false;

    let temp = [];
    for (let row = 0; row < n; row++) {
      const no = board[row][col];
      const dex = checkLocation(row, col);
      if (!isNaN(no)) {
        temp.push(Number(no));
        grid[dex].push(Number(no));
      }
    }
    if (duplicate(temp)) return false;
  }

  // return grid;
  for (const nums of grid) {
    if (duplicate(nums)) return false;
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);
