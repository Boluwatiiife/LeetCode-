// 1971. Find if Path Exists in Graph

const validPath = function (n, edges, source, destination) {
  edges.map((arr) => arr.sort((a, b) => a - b));
  edges.sort((a, b) => a[0] - b[0]);
  edges.sort((a, b) => a[1] - b[1]);

  let arr = [];
  let temp = [...edges[0]];

  for (let i = 1; i < edges.length; i++) {
    const [x, y] = edges[i];
    if (temp.includes(x) || temp.includes(y)) {
      if (!temp.includes(x)) temp.push(x);
      if (!temp.includes(y)) temp.push(y);
    } else {
      arr.push(temp);
      temp = [];
      temp.push(x);
      temp.push(y);
    }
  }
  arr.push(temp);
  return arr;

  for (const temp of arr) {
    if (temp.includes(source) && temp.includes(destination)) return true;
  }

  return false;
  return arr;

  return edges;
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
      [0, 4],
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
    50,
    [
      [18, 46],
      [8, 48],
      [13, 30],
      [28, 29],
      [2, 16],
      [7, 36],
      [12, 19],
      [31, 16],
      [11, 46],
      [6, 46],
      [19, 27],
      [4, 24],
      [10, 37],
      [14, 37],
      [39, 31],
      [10, 22],
      [23, 2],
      [47, 11],
      [40, 7],
      [21, 17],
      [9, 3],
      [34, 10],
      [48, 1],
      [21, 35],
      [43, 48],
      [27, 5],
      [36, 11],
      [43, 36],
      [31, 48],
      [25, 33],
      [46, 19],
      [31, 30],
      [16, 45],
      [30, 10],
      [35, 47],
      [35, 13],
      [37, 48],
      [49, 3],
      [7, 26],
      [2, 30],
      [0, 27],
      [25, 9],
      [28, 27],
      [39, 18],
      [32, 6],
      [14, 43],
      [9, 27],
      [27, 4],
      [6, 0],
      [21, 43],
    ],
    48,
    2
  )
);
