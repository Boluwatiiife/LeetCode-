// 646. Maximum Length of Pair Chain

const findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let curr_end = -Infinity;

  for (const [left, right] of pairs) {
    if (left > curr_end) {
      count++;
      curr_end = right;
    }
  }

  return count;
};

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  findLongestChain([
    [1, 2],
    [7, 8],
    [4, 5],
  ])
);
console.log(
  findLongestChain([
    [-1, 1],
    [-2, 7],
    [-5, 8],
    [-3, 8],
    [1, 3],
    [-2, 9],
    [-5, 2],
  ])
);
console.log(
  findLongestChain([
    [7, 9],
    [4, 5],
    [7, 9],
    [-7, -1],
    [0, 10],
    [3, 10],
    [3, 6],
    [2, 3],
  ])
);
