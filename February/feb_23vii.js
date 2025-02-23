// 1812. Determine Color of a Chessboard Square

const squareIsWhite = function (coordinates) {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let arr = coordinates.split("");
  arr[1] = Number(arr[1]);
  for (let i = 0; i < alpha.length; i++) {
    if (arr[0] === alpha[i]) {
      arr[0] = i + 1;
    }
  }
  if (
    (arr[0] % 2 === 0 && arr[1] % 2 === 0) ||
    (arr[0] % 2 !== 0 && arr[1] % 2 !== 0)
  ) {
    return false;
  } else {
    return true;
  }
};

console.log(squareIsWhite("a1"));
console.log(squareIsWhite("h3"));
console.log(squareIsWhite("c7"));
console.log(squareIsWhite("d7"));
