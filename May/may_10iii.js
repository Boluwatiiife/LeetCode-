// 581. Shortest Unsorted Continuous Subarray
// given an array of unsorted numbers, find the length of the smallest subarrays that
// when sorted will sort the whole array

const sort_the_sort = function (arr) {
  const n = arr.length;
  let left = 0,
    right = n - 1;
  while (arr[left] <= arr[left + 1] && left < n - 1) left++;
  while (arr[right] >= arr[right - 1] && right > -1) right--;

  if (left === n - 1) return 0;

  let temp = arr.slice(left, right + 1);
  const min = Math.min(...temp);
  const max = Math.max(...temp);

  while (arr[left - 1] > min) left--;
  while (arr[right + 1] < max) right++;

  return right - left + 1;
};

console.log(sort_the_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(sort_the_sort([2, 6, 4, 8, 10, 9, 15])); //5
console.log(sort_the_sort([1, 2, 3, 4])); //0
console.log(sort_the_sort([1, 2, 5, 3, 4]));
console.log(sort_the_sort([1]));
console.log(sort_the_sort([2, 3, 3, 2, 4]));
console.log(sort_the_sort([1, 2, 3, 3, 3]));
console.log(sort_the_sort([1, 3, 2, 2, 2]));
console.log(sort_the_sort([1, 3, 5, 4, 2]));
console.log(sort_the_sort([2, 1, 1, 1, 1]));
console.log(sort_the_sort([2, 1]));
