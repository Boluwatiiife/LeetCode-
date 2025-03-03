// 2220. Minimum Bit Flips to Convert Number

const minBitFlips = function (start, goal) {
  start = start.toString(2);
  goal = goal.toString(2);
  let maxx = Math.max(start.length, goal.length);

  while (start.length < maxx) {
    start = "0" + start;
  }
  while (goal.length < maxx) {
    goal = "0" + goal;
  }

  let count = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] !== start[i]) {
      count++;
    }
  }

  return count;
};

console.log(minBitFlips(10, 7));
console.log(minBitFlips(3, 4));
