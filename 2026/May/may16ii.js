// 2363. Merge Similar Items

const mergeSimilarItems = function (items1, items2) {
  const arr = [...items1, ...items2];
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [];
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const [one, two] = arr[i];
    if (one === temp[0]) {
      temp[1] += two;
    } else {
      ans.push(temp);
      temp = arr[i];
    }
  }
  ans.push(temp);

  return ans;
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
    ],
  ),
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
    ],
  ),
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
    ],
  ),
);
