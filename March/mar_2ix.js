// 2570. Merge Two 2D Arrays by Summing Values

const mergeArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2];
  let temp = arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < temp.length - 1; i++) {
    if (temp[i][0] === temp[i + 1][0]) {
      temp[i][1] = temp[i][1] + temp[i + 1][1];
      temp.splice(i + 1, 1);
      i--;
    }
  }
  return temp;
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
console.log(
  mergeArrays(
    [
      [2, 4],
      [3, 6],
      [5, 5],
    ],
    [
      [1, 3],
      [4, 3],
    ]
  )
);
