// 3274. Check if Two Chessboard Squares Have the Same Color

const checkTwoChessboards = function (coordinate1, coordinate2) {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let arr = [coordinate1.split(""), coordinate2.split("")];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    temp[0] = alpha.indexOf(temp[0]) + 1;
    temp[1] = Number(temp[1]);
    arr[i] = temp;
  }

  if ((arr[0][0] + arr[0][1]) % 2 === 0 && (arr[1][0] + arr[1][1]) % 2 === 0)
    return true;
  if ((arr[0][0] + arr[0][1]) % 2 !== 0 && (arr[1][0] + arr[1][1]) % 2 !== 0)
    return true;
  return false;
};

console.log(checkTwoChessboards("a1", "c3"));
console.log(checkTwoChessboards("a1", "h3"));
console.log(checkTwoChessboards("c2", "g4"));
console.log(checkTwoChessboards("h7", "c8"));
