// 845. Longest Mountain in Array

const longestMountain = function (arr) {
  const n = arr.length;
  let max = 0;
  let i = 1;

  while (i < n - 1) {
    // check if current is a peak
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let left = i - 1;
      let right = i + 1;

      // expand left pointer while it's increasing
      while (left > 0 && arr[left - 1] < arr[left]) left--;
      while (right < n - 1 && arr[right] > arr[right + 1]) right++;

      // calculate the mountain length
      let currLen = right - left + 1;
      max = Math.max(max, currLen);
      i = right;
    } else i++;
  }
  return max;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
console.log(longestMountain([2, 1, 4, 5, 7, 3, 2, 5]));
console.log(longestMountain([2, 2, 2]));
console.log(longestMountain([1, 3, 2, 2, 1, 2, 3, 4, 3]));
