// 704. Binary Search

const search = function (nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let temp = nums[mid];
    if (temp === target) return mid;
    if (temp > target) {
      right = mid - 1;
    } else if (temp < target) {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
