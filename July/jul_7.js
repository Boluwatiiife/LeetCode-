// 1353. Maximum Number of Events That Can Be Attended

const maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);
  let sett = new Set();
  let count = 0;

  for (let i = events.length - 1; i >= 0; i--) {
    const [start, end] = events[i];
    let num = end;
    while (sett.has(num)) {
      num--;
    }
    if (num >= start) {
      sett.add(num);
      count++;
    }
  }

  return count;
};

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2],
  ])
);
console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2],
    [1, 3],
  ])
);
console.log(
  maxEvents([
    [1, 2],
    [1, 2],
    [3, 3],
    [1, 5],
    [1, 5],
  ])
);
console.log(
  maxEvents([
    [1, 2],
    [2, 2],
    [3, 3],
    [3, 4],
    [3, 4],
  ])
);
console.log(
  maxEvents([
    [1, 5],
    [1, 5],
    [1, 5],
    [2, 3],
    [2, 3],
  ])
);
console.log(
  maxEvents([
    [26, 27],
    [24, 26],
    [1, 4],
    [1, 2],
    [3, 6],
    [2, 6],
    [9, 13],
    [6, 6],
    [25, 27],
    [22, 25],
    [20, 24],
    [8, 8],
    [27, 27],
    [30, 32],
  ])
);
console.log(
  maxEvents([
    [27, 27],
    [8, 10],
    [9, 11],
    [20, 21],
    [25, 29],
    [17, 20],
    [12, 12],
    [12, 12],
    [10, 14],
    [7, 7],
    [6, 10],
    [7, 7],
    [4, 8],
    [30, 31],
    [23, 25],
    [4, 6],
    [17, 17],
    [13, 14],
    [6, 9],
    [13, 14],
  ])
);
