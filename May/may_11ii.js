// 658. Find K Closest Elements

const findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left >= k) {
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) left++;
    else right--;
  }

  return arr.slice(left, right + 1);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 4, 5, 6, 7], 3, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 1));
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, 6));
console.log(findClosestElements([1, 1, 2, 3, 4, 5, 6], 4, 6));
