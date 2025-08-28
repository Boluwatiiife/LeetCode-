// maximum sum rectangle in a 2D matrix

const maxSummRectangle = function (arr) {
  const rr = arr.length,
    cc = arr[0].length;
  let maxRec = 0;
  let left = 0,
    right = 0,
    top = 0,
    bottom = 0;

  for (let col = 0; col < cc; col++) {
    let line = Array(rr).fill(0);
    for (let innerCol = col; innerCol < cc; innerCol++) {
      for (let row = 0; row < rr; row++) {
        line[row] += arr[row][innerCol];
      }
      const [max, i, j] = maxSubsum(line);
      if (max > maxRec) {
        maxRec = max;
        (left = col), (right = innerCol), (top = i), (bottom = j);
      }
    }
  }
  return [maxRec, [left, right], [top, bottom]];
};
function maxSubsum(nums) {
  let one = 0,
    two = 0,
    max = 0;

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let curr = 0;
    for (let j = i; j < nums.length; j++) {
      curr += nums[j];
      if (curr > max) {
        (one = i), (two = j), (max = Math.max(max, curr));
      }
      sum = curr;
    }
    sum = 0;
  }
  return [max, one, two];
}

console.log(
  maxSummRectangle([
    [6, -5, -7, 4, -4],
    [-9, 3, -6, 5, 2],
    [-10, 4, 7, -6, 3],
    [-8, 9, -3, 3, -7],
  ])
);
console.log(
  maxSummRectangle([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
