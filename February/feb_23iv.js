// 1791. Find Center of Star Graph

const findCenter = function (edges) {
  let one = edges[0][0];
  let two = edges[0][1];

  if (edges[1][0] === one || edges[1][0] === two) return edges[1][0];
  if (edges[1][1] === one || edges[1][1] === two) return edges[1][1];
};

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
