// 2970. Count the Number of Incremovable Subarrays I

const incremovableSubarrayCount = function (nums) {
  let n = nums.length;
  let count = 0;

  function isStrictlyIncre(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
  }
  for (let i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
      let temp = [...nums.slice(0, i), ...nums.slice(1 + j)];
      if (isStrictlyIncre(temp)) {
        count++;
      }
    }
  }
  return count;
};

console.log(incremovableSubarrayCount([1, 2, 3, 4]));
console.log(incremovableSubarrayCount([6, 5, 7, 8]));
console.log(incremovableSubarrayCount([8, 7, 6, 6]));
console.log(incremovableSubarrayCount([1, 1, 1]));
