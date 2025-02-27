// 2022. Convert 1D Array Into 2D Array

const construct2DArray = function (original, m, n) {
  if (m * n !== original.length) return [];

  let arr = [];
  let te = n;
  for (let i = 0; i < original.length; i = i + n) {
    let temp = [];
    for (let x = i; x < te; x++) {
      temp.push(original[x]);
    }
    arr.push(temp);
    te = te + n;
  }
  return arr;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([3], 1, 2));
