// 2363. Merge Similar Items

const mergeSimilarItems = function (items1, items2) {
  let arr = [...items1, ...items2];
  arr = arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][0] === arr[i + 1][0]) {
      arr[i] = [arr[i][0], arr[i][1] + arr[i + 1][1]];
      arr.splice(i + 1, 1);
      i--;
    }
  }

  return arr.sort((a, b) => a[0] - b[0]);
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
);
console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [3, 2],
      [2, 3],
    ],
    [
      [2, 1],
      [3, 2],
      [1, 3],
    ]
  )
);
console.log(
  mergeSimilarItems(
    [
      [1, 3],
      [2, 2],
    ],
    [
      [7, 1],
      [2, 2],
      [1, 4],
    ]
  )
);
