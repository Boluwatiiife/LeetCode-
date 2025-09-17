// 435. Non-overlapping Intervals

const eraseOverlapIntervals = function (intervals) {
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  function checkk(val, dex) {
    const [y1, y2] = val;
    let low = 0,
      high = dex;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const [x1, x2] = intervals[mid];
      if (x2 <= y1) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return high;
  }

  let ans = Array(intervals.length);
  ans[0] = 1;
  let maxx = 1;

  for (let i = 1; i < intervals.length; i++) {
    const temp = checkk(intervals[i], i - 1);
    let no = temp >= 0 ? 1 + ans[temp] : 1 + 0;
    ans[i] = Math.max(ans[i - 1], no);
    maxx = Math.max(maxx, ans[i]);
  }

  return intervals.length - maxx;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);
