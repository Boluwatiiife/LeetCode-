// 999. Available Captures for Rook

const numRookCaptures = function (board) {
  const n = board.length;
  let dex = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      if (board[j][i] === "R") dex = j;
      temp.push(board[j][i]);
    }
    if (temp.includes("R")) {
      const one = board[dex];
      for (let i = one.indexOf("R") + 1; i < one.length; i++) {
        if (one[i] === "B") break;
        else if (one[i] === "p") {
          count++;
          break;
        }
      }
      for (let i = one.indexOf("R") - 1; i >= 0; i--) {
        if (one[i] === "B") break;
        else if (one[i] === "p") {
          count++;
          break;
        }
      }
      for (let i = temp.indexOf("R") + 1; i < temp.length; i++) {
        if (temp[i] === "B") break;
        else if (temp[i] === "p") {
          count++;
          break;
        }
      }
      for (let i = temp.indexOf("R") - 1; i >= 0; i--) {
        if (temp[i] === "B") break;
        else if (temp[i] === "p") {
          count++;
          break;
        }
      }
    }
  }
  return count;
};

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "B", "R", "B", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
