// 657. Robot Return to Origin

const judgeCircle = function (moves) {
  let ud = 0;
  let rl = 0;
  for (const char of moves) {
    if (char === "U") ud++;
    else if (char === "D") ud--;
    else if (char === "R") rl++;
    else rl--;
  }
  return ud === 0 && rl === 0;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));
console.log(judgeCircle("RRDD"));
