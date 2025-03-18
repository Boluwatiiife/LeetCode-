// 3033. Modify the Matrix

const modifiedMatrix = function (matrix) {
  let n = matrix[0].length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let col = 0; col < matrix.length; col++) {
      temp.push(matrix[col][i]);
    }
    arr.push(temp);
  }
  //   return arr;
  let arrr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let max = Math.max(...temp);
    for (let x = 0; x < temp.length; x++) {
      if (temp[x] === -1) {
        temp[x] = max;
      }
    }
    arrr.push(temp);
  }

  let back = [];
  for (let i = 0; i < matrix.length; i++) {
    let temp = [];
    for (let col = 0; col < n; col++) {
      temp.push(arrr[col][i]);
    }
    back.push(temp);
  }

  return back;
};

console.log(
  modifiedMatrix([
    [1, 2, -1],
    [4, -1, 6],
    [7, 8, 9],
  ])
);
console.log(
  modifiedMatrix([
    [3, -1],
    [5, 2],
  ])
);
console.log(
  modifiedMatrix([
    [-1, 0, 0, 2, 2],
    [2, 0, 0, 2, 1],
    [4, 3, 2, 1, 1],
    [-1, -1, 0, 2, 4],
    [1, 0, 3, -1, 0],
  ])
);
console.log(
  modifiedMatrix([
    [2, -1, 2, -1, 2],
    [1, 0, -1, 2, -1],
    [2, -1, -1, -1, 2],
    [2, 1, 2, -1, 2],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, -1],
    [2, -1, 2, 2, 0],
    [0, 1, 0, 2, 2],
    [2, 2, 0, 1, -1],
  ])
);
