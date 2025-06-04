// 852. Peak Index in a Mountain Array

const peakIndexInMountainArray = function (arr) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid;
  }
  return right;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([1, 3, 6, 7, 9, 8, 7, 6]));
