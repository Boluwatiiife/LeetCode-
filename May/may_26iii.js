// 2406. Divide Intervals Into Minimum Number of Groups

const minGroups = function (intervals) {
  const n = intervals.length;
  const one = intervals.map(([start, _]) => start).sort((a, b) => a - b);
  const two = intervals.map(([_, end]) => end).sort((a, b) => a - b);

  let curr = 0;
  let max = 0;
  let i = 0,
    j = 0;

  while (i < n) {
    if (one[i] <= two[j]) {
      curr++;
      max = Math.max(max, curr);
      i++;
    } else {
      curr--;
      j++;
    }
  }
  return max;
};

console.log(
  minGroups([
    [5, 10],
    [6, 8],
    [1, 5],
    [2, 3],
    [1, 10],
  ])
);
console.log(
  minGroups([
    [1, 3],
    [5, 6],
    [8, 10],
    [11, 13],
  ])
);

console.log(
  minGroups([
    [441459, 446342],
    [801308, 840640],
    [871890, 963447],
    [228525, 336985],
    [807945, 946787],
    [479815, 507766],
    [693292, 944029],
    [751962, 821744],
  ])
);
