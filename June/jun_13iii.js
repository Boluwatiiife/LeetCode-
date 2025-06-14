// 2250. Count Number of Rectangles Containing Each Point

const countRectangles = function (rectangles, points) {
  rectangles.sort((a, b) => a[1] - b[1]);
  const m = rectangles.length;
  const recsByHeight = Array.from({ length: 101 }, () => []);

  for (let i = 0; i < m; i++) {
    const temp = rectangles[i];
    recsByHeight[temp[1]].push(temp[0]);
  }

  for (let h = 1; h <= 100; h++) {
    recsByHeight[h].sort((a, b) => a - b);
  }

  // binary search
  function countGreaterOrEqual(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return arr.length - left;
  }

  // for each point, check how many rectangles cover it
  const ans = [];

  for (const [x, y] of points) {
    let count = 0;

    for (let h = y; h <= 100; h++) {
      const lengths = recsByHeight[h];
      if (lengths.length === 0) continue;
      count += countGreaterOrEqual(lengths, x);
    }
    ans.push(count);
  }
  return ans;
};

console.log(
  countRectangles(
    [
      [1, 2],
      [2, 3],
      [2, 5],
    ],
    [
      [2, 1],
      [1, 4],
    ]
  )
);
console.log(
  countRectangles(
    [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    [
      [1, 3],
      [1, 1],
    ]
  )
);
console.log(
  countRectangles(
    [
      [7, 1],
      [2, 6],
      [1, 4],
      [5, 2],
      [10, 3],
      [2, 4],
      [5, 9],
    ],
    [
      [10, 3],
      [8, 10],
      [2, 3],
      [5, 4],
      [8, 5],
      [7, 10],
      [6, 6],
      [3, 6],
    ]
  )
);
