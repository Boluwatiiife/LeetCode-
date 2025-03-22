// 3386. Button with Longest Push Time

const buttonWithLongestTime = function (events) {
  let arr = [events[0]];
  let n = events.length;
  let maxx = arr[0][1];

  for (let i = 1; i < n; i++) {
    let beff = events[i - 1];
    let curr = events[i];
    let diff = curr[1] - beff[1];
    arr.push([curr[0], diff]);
    maxx = Math.max(maxx, diff);
  }
  let result = [];
  for ([index, time] of arr) {
    if (time === maxx) {
      result.push([index, time]);
    }
  }
  result.sort((a, b) => a[0] - b[0]);
  return result[0][0];
};

console.log(
  buttonWithLongestTime([
    [1, 2],
    [2, 5],
    [3, 9],
    [1, 15],
  ])
);
console.log(
  buttonWithLongestTime([
    [10, 5],
    [1, 7],
  ])
);
console.log(
  buttonWithLongestTime([
    [10, 5],
    [1, 7],
    [2, 12],
  ])
);
