// 2677. Chunk Array

const chunk = function (arr, size) {
  let arrr = [];

  for (let i = 0; i < arr.length; i += size) {
    let temp = [];
    for (let j = i; j < size + i; j++) {
      if (j === arr.length) break;
      temp.push(arr[j]);
    }
    arrr.push(temp);
  }
  return arrr;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([], 1));
