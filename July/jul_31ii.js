// 2437. Number of Valid Clock Times

const countTime = function (time) {
  let ans = [];
  let [onee, twoo, , threee, fourr] = time.split("");

  let one = onee === "?" ? "?" : Number(time[0]),
    two = twoo === "?" ? "?" : Number(time[1]),
    three = threee === "?" ? "?" : Number(time[3]),
    four = fourr === "?" ? "?" : Number(time[4]);

  if (one === "?" && two > 3) ans.push(2);
  if (one === "?" && two <= 3) ans.push(3);
  if (two === "?" && one < 2) ans.push(10);
  if (two === "?" && one === 2) ans.push(4);
  if (two === "?" && one === "?") ans.push(24);
  if (three === "?") ans.push(6);
  if (four === "?") ans.push(10);

  return ans.length > 0 ? ans.reduce((a, b) => a * b) : 1;
};

console.log(countTime("?5:00"));
console.log(countTime("0?:0?"));
console.log(countTime("??:??"));
console.log(countTime("?3:1?"));
console.log(countTime("2?:??"));
console.log(countTime("21:08"));
