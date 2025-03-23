// 3417. Zigzag Grid Traversal With Skip

const zigzagTraversal = function (grid) {
  let arr = [];
  let n = grid.length;

  for (let i = 0; i < n; i++) {
    let temp = grid[i];
    if (i % 2 === 0) {
      for (let j = 0; j < temp.length; j++) {
        arr.push(temp[j]);
      }
    } else if (i % 2 !== 0) {
      for (let j = temp.length - 1; j >= 0; j--) {
        arr.push(temp[j]);
      }
    }
  }
  let resultt = [];
  for (let i = 0; i < arr.length; i += 2) {
    resultt.push(arr[i]);
  }
  return resultt;
  return arr;
};

console.log(
  zigzagTraversal([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  zigzagTraversal([
    [2, 1],
    [2, 1],
    [2, 1],
  ])
);
console.log(
  zigzagTraversal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
