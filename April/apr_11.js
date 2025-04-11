// 658. Find K Closest Elements

const findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length;

  while (right - left > k) {
    if (x - arr[left] <= arr[right - 1] - x) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([2, 3, 4, 5, 6, 7], 5, 6));
console.log(findClosestElements([5, 6, 7, 8, 9, 10, 11, 12], 5, 15));
console.log(findClosestElements([1], 1, 1));
console.log(findClosestElements([1, 1, 2, 2, 2, 2, 2, 3, 3], 3, 3));
