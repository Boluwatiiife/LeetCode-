// 1574. Shortest Subarray to be Removed to Make Array Sorted

const findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;
  // find the non-decresing prefix
  let left = 0;
  while (left + 1 < n && arr[left] <= arr[left + 1]) left++;

  // if the whole array is non-decreasing, return 0
  if (left === n - 1) return 0;

  // find the non-decreaing suffix
  let right = n - 1;
  while (right > 0 && arr[right] >= arr[right - 1]) right--;

  // try removing the entire middle or part of it
  let result = Math.min(n - left - 1, right);

  // merge prefix and suffix
  let i = 0,
    j = right;
  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      result = Math.min(result, j - i - 1);
      i++;
    } else {
      j++;
    }
  }
  return result;
};

console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]));
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1]));
console.log(findLengthOfShortestSubarray([1, 2, 3]));
