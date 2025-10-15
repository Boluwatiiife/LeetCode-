// 1024. Video Stitching

const videoStitching = function (clips, time) {
  clips.sort((a, b) => a[0] - b[0]);
  let grid = Array(time + 1).fill(Infinity);
  grid[0] = 0;

  for (let i = 1; i <= time; i++) {
    for (const [start, end] of clips) {
      if (start <= i - 1 && i <= end) {
        grid[i] = Math.min(grid[i], grid[start] + 1);
      }
    }
  }

  return grid[time] === Infinity ? -1 : grid[time];
};

console.log(
  videoStitching(
    [
      [0, 2],
      [4, 6],
      [8, 10],
      [1, 9],
      [1, 5],
      [5, 9],
    ],
    10
  )
);
console.log(
  videoStitching(
    [
      [0, 1],
      [1, 2],
    ],
    5
  )
);
console.log(
  videoStitching(
    [
      [0, 1],
      [6, 8],
      [0, 2],
      [5, 6],
      [0, 4],
      [0, 3],
      [6, 7],
      [1, 3],
      [4, 7],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 4],
      [4, 5],
      [5, 7],
      [6, 9],
    ],
    9
  )
);
