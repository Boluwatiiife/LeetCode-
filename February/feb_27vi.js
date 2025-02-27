// 2027. Minimum Moves to Convert String

const minimumMoves = function (s) {
  let arr = s.split("");
  let resultt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "X") {
      resultt++;
      i = i + 2;
    }
  }
  return resultt;
};

console.log(minimumMoves("XXX"));
console.log(minimumMoves("XXOX"));
console.log(minimumMoves("OOOO"));
console.log(minimumMoves("OXOX"));
console.log(minimumMoves("XXXOOXXX"));
console.log(minimumMoves("XOXOX"));
