// 1619. Mean of Array After Removing Some Elements

const trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  let lengg = arr.length;
  let perr = (5 / 100) * lengg;

  let resultt = [];
  for (let i = perr; i < lengg - perr; i++) {
    resultt.push(arr[i]);
  }
  return resultt.reduce((a, b) => a + b) / resultt.length;
};

console.log(
  trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
);
console.log(
  trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
);
console.log(
  trimMean([
    6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4,
    3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
  ])
);
