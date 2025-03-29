// 56. Merge Intervals

const merge = function (intervals) {
  let n = intervals.length;
  if (n === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [intervals[0]];

  for (let i = 1; i < n; i++) {
    let prev = merged[merged.length - 1];
    let curr = intervals[i];

    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  return merged;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  merge([
    [1, 4],
    [5, 6],
  ])
);
console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
);
