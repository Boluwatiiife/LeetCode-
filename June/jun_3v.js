// 436. Find Right Interval

const findRightInterval = function (intervals) {
  const n = intervals.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let [x, y] = intervals[i];
    arr.push([x, i]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [];

  for (let i = 0; i < n; i++) {
    const end = intervals[i][1];
    let left = 0;
    let right = n - 1;
    let dex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid][0] >= end) {
        dex = arr[mid][1];
        right = mid - 1;
      } else if (arr[mid][0] < end) left = mid + 1;
    }
    ans.push(dex);
  }

  return ans;
};

console.log(findRightInterval([[1, 2]]));
console.log(
  findRightInterval([
    [3, 4],
    [2, 3],
    [1, 2],
  ])
);
console.log(
  findRightInterval([
    [1, 4],
    [2, 3],
    [3, 4],
  ])
);
