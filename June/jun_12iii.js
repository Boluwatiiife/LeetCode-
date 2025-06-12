// 2070. Most Beautiful Item for Each Query

const maximumBeauty = function (items, queries) {
  function checkk(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= x) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }
  items.sort((a, b) => a[0] - b[0]);
  let price = items.map(([xx, yy]) => xx);
  let maxBeauty = [];
  maxBeauty.push(items[0][1]);
  for (let i = 1; i < items.length; i++) {
    let xxx = items[i];
    maxBeauty[i] = Math.max(maxBeauty[i - 1], xxx[1]);
  }
  let ans = [];

  for (const no of queries) {
    let temp = checkk(price, no);
    if (temp >= 0) {
      ans.push(maxBeauty[temp]);
    } else {
      ans.push(0);
    }
  }

  return ans;
};

console.log(
  maximumBeauty(
    [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ],
    [1, 2, 3, 4, 5, 6]
  )
);
console.log(
  maximumBeauty(
    [
      [1, 2],
      [1, 2],
      [1, 3],
      [1, 4],
    ],
    [1]
  )
);
console.log(maximumBeauty([[10, 1000]], [5]));
console.log(
  maximumBeauty(
    [
      [193, 732],
      [781, 962],
      [864, 954],
      [749, 627],
      [136, 746],
      [478, 548],
      [640, 908],
      [210, 799],
      [567, 715],
      [914, 388],
      [487, 853],
      [533, 554],
      [247, 919],
      [958, 150],
      [193, 523],
      [176, 656],
      [395, 469],
      [763, 821],
      [542, 946],
      [701, 676],
    ],
    [
      885, 1445, 1580, 1309, 205, 1788, 1214, 1404, 572, 1170, 989, 265, 153,
      151, 1479, 1180, 875, 276, 1584,
    ]
  )
);
