// 2439. Minimize Maximum of Array

const minimizeArrayValue = function (nums) {
  function isPossible(arr, mid) {
    let excess = 0;
    for (let i = arr.length - 1; i >= 1; i--) {
      if (arr[i] + excess > mid) {
        let temp = arr[i] + excess - mid;
        excess = temp;
      } else {
        excess = 0;
      }
    }
    return arr[0] + excess <= mid;
  }
  let left = 0;
  let right = Math.max(...nums);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(nums, mid)) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};

console.log(minimizeArrayValue([3, 7, 1, 6])); //5
console.log(minimizeArrayValue([10, 1])); //10
console.log(minimizeArrayValue([13, 13, 20, 0, 8, 9, 9])); // 16
console.log(minimizeArrayValue([12, 20, 11, 0, 10, 9, 5, 12, 4])); // 16
