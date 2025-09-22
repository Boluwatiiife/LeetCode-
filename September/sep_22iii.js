// 3683. Earliest Time to Finish One Task

const earliestTime = function (tasks) {
  let ans = Infinity;

  for (const [one, two] of tasks) {
    ans = Math.min(ans, one + two);
  }

  return ans;
};

console.log(
  earliestTime([
    [1, 6],
    [2, 3],
  ])
);
console.log(
  earliestTime([
    [100, 100],
    [100, 100],
    [100, 100],
  ])
);
