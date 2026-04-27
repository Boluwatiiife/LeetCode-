// 3386. Button with Longest Push Time

const buttonWithLongestTime = function (events) {
  const n = events.length;
  let one = events[0][1];
  let ans = events[0][0];

  for (let i = 1; i < n; i++) {
    const [dex, num] = events[i];
    if (num - events[i - 1][1] > one) {
      one = num - events[i - 1][1];
      ans = dex;
    } else if (num - events[i - 1][1] >= one && dex < ans) {
      one = num - events[i - 1][1];
      ans = dex;
    }
  }

  return ans;
};

console.log(
  buttonWithLongestTime([
    [1, 2],
    [2, 5],
    [3, 9],
    [1, 15],
  ]),
);
console.log(
  buttonWithLongestTime([
    [10, 5],
    [1, 7],
  ]),
);
console.log(
  buttonWithLongestTime([
    [8, 4],
    [7, 6],
    [19, 9],
    [8, 14],
    [13, 15],
    [2, 16],
    [2, 18],
  ]),
);
console.log(
  buttonWithLongestTime([
    [9, 4],
    [19, 5],
    [2, 8],
    [3, 11],
    [2, 15],
  ]),
);
