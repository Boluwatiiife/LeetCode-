// 1971. Find if Path Exists in Graph

const validPath = function (n, edges, source, destination) {
  //   let arr = [];

  for (let i = 0; i < edges.length; i++) {
    let num = edges[i];
    let temp = [];
    for (let j = 0; j < edges.length; j++) {
      //   let temp = [];
      if (edges[j].includes(num[0]) || edges[j].includes(num[1])) {
        temp.push(edges[j][0]);
        temp.push(edges[j][1]);
      }
      //   arr.push(temp);
      //   temp = [];
    }
    if (temp.includes(source) && temp.includes(destination)) {
      return true;
    }
    // arr.push(temp);
    // temp = [];
  }

  return false;

  return arr;
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [1, 3],
    ],
    0,
    5
  )
);
