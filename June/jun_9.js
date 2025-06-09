// 1818. Minimum Absolute Sum Difference

const minAbsoluteSumDiff = function (nums1, nums2) {
  function closestNum(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      let num = arr[mid];
      if (num === x) return num;
      else if (num < x) left = mid + 1;
      else right = mid - 1;
    }

    const left_neighbor = arr[left - 1];
    const right_neighbor = arr[left];

    if (left >= arr.length) return left_neighbor;
    if (left === 0) return right_neighbor;

    return Math.abs(x - left_neighbor) <= Math.abs(x - right_neighbor)
      ? left_neighbor
      : right_neighbor;
  }
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    arr.push(Math.abs(nums1[i] - nums2[i]));
  }
  const sortt = [...nums1].sort((a, b) => a - b);
  const ans = arr.reduce((a, b) => a + b, 0);
  let minn = Infinity;

  for (let i = 0; i < nums1.length; i++) {
    let diff = Math.abs(nums1[i] - nums2[i]);
    let close = closestNum(sortt, nums2[i]);

    let temp = ans - diff;
    temp += Math.abs(close - nums2[i]);
    minn = Math.min(minn, temp);
  }

  return minn % (1e9 + 7);
};

console.log(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]));
console.log(minAbsoluteSumDiff([2, 4, 6, 8, 10], [2, 4, 6, 8, 10]));
console.log(minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4]));
console.log(
  minAbsoluteSumDiff(
    [
      57, 42, 21, 28, 30, 25, 22, 12, 55, 3, 47, 18, 43, 29, 20, 44, 59, 9, 43,
      7, 8, 5, 42, 53, 99, 34, 37, 88, 87, 62, 38, 68, 31, 3, 11, 61, 93, 34,
      63, 27, 20, 48, 38, 5, 71, 100, 88, 54, 52, 15, 98, 59, 74, 26, 81, 38,
      11, 44, 25, 69, 79, 81, 51, 85, 59, 84, 83, 99, 31, 47, 31, 23, 83, 70,
      82, 79, 86, 31, 50, 17, 11, 100, 55, 15, 98, 11, 90, 16, 46, 89, 34, 33,
      57, 53, 82, 34, 25, 70, 5, 1,
    ],
    [
      76, 3, 5, 29, 18, 53, 55, 79, 30, 33, 87, 3, 56, 93, 40, 80, 9, 91, 71,
      38, 35, 78, 32, 58, 77, 41, 63, 5, 21, 67, 21, 84, 52, 80, 65, 38, 62, 99,
      80, 13, 59, 94, 21, 61, 43, 82, 29, 97, 31, 24, 95, 52, 90, 92, 37, 26,
      65, 89, 90, 32, 27, 3, 42, 47, 93, 25, 14, 5, 39, 85, 89, 7, 74, 38, 12,
      46, 40, 25, 51, 2, 19, 8, 21, 62, 58, 29, 32, 77, 62, 9, 74, 98, 10, 55,
      25, 62, 48, 48, 24, 21,
    ]
  )
);
console.log(minAbsoluteSumDiff([1, 28, 21], [9, 21, 20]));
console.log(
  minAbsoluteSumDiff(
    [
      56, 51, 39, 1, 12, 14, 58, 82, 18, 41, 70, 64, 18, 7, 44, 90, 55, 23, 11,
      79, 59, 76, 67, 92, 60, 80, 57, 11, 66, 32, 76, 73, 35, 65, 55, 37, 38,
      26, 4, 7, 64, 84, 98, 61, 78, 1, 80, 33, 5, 66, 32, 30, 52, 29, 41, 2, 21,
      83, 30, 35, 21, 30, 13, 26, 36, 93, 81, 41, 98, 23, 20, 19, 45, 52, 25,
      51, 52, 24, 2, 45, 21, 97, 11, 92, 28, 37, 58, 29, 5, 18, 98, 94, 86, 65,
      88, 8, 75, 12, 9, 66,
    ],
    [
      64, 32, 98, 65, 67, 40, 71, 93, 74, 24, 49, 80, 98, 35, 86, 52, 99, 65,
      15, 92, 83, 84, 80, 71, 46, 11, 26, 70, 80, 2, 81, 57, 97, 12, 68, 10, 49,
      80, 24, 18, 45, 72, 33, 94, 60, 5, 94, 99, 14, 41, 25, 83, 77, 67, 49, 70,
      94, 83, 55, 17, 61, 44, 50, 62, 3, 36, 67, 10, 2, 39, 53, 62, 44, 72, 66,
      7, 3, 6, 80, 38, 43, 100, 17, 25, 24, 78, 8, 4, 36, 86, 9, 68, 99, 64, 65,
      15, 42, 59, 79, 66,
    ]
  )
);
