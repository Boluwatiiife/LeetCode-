// 1275. Find Winner on a Tic Tac Toe Game

const tictactoe = function (moves) {
  const grid = Array.from({ length: 3 }, () => Array(3).fill("_"));

  for (let i = 0; i < moves.length; i++) {
    const [one, two] = moves[i];
    if (i % 2 === 0) {
      grid[one][two] = "X";
    } else {
      grid[one][two] = "O";
    }
  }
  //   return grid;
  const one = [grid[0][0], grid[1][1], grid[2][2]];
  const two = [grid[2][0], grid[1][1], grid[0][2]];
  const three = [grid[0][0], grid[0][1], grid[0][2]];
  const four = [grid[1][0], grid[1][1], grid[1][2]];
  const five = [grid[2][0], grid[2][1], grid[2][2]];
  const six = [grid[0][0], grid[1][0], grid[2][0]];
  const seven = [grid[0][1], grid[1][1], grid[2][1]];
  const eight = [grid[0][2], grid[1][2], grid[2][2]];
  const arr = [one, two, three, four, five, six, seven, eight];
  //   return arr;

  for (const temp of arr) {
    if (temp.every((xx) => xx === "X")) return "A";
    if (temp.every((xx) => xx === "O")) return "B";
  }

  if (moves.length === 9) return "Draw";
  return "Pending";
};

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
);
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
);
console.log(
  tictactoe([
    [2, 0],
    [1, 0],
    [1, 1],
    [0, 2],
  ])
);
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
);
