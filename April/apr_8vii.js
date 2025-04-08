// 704. Binary Search

const search = function (nums, target) {
  let n = nums.length,
    left = 0,
    right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 2, 4, 6, 7, 9, 10, 11, 13, 17], 2));
