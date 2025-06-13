// 2616. Minimize the Maximum Difference of Pairs

const minimizeMax = function (nums, p) {
  function canForm(arr, d, p) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] <= d) {
        count++;
        i++;
      }
    }
    return count >= p;
  }
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums[nums.length - 1] - nums[0];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canForm(nums, mid, p)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minimizeMax([10, 1, 2, 7, 1, 3], 2));
console.log(minimizeMax([4, 2, 1, 2], 1));
console.log(minimizeMax([4, 2, 1, 2], 2));
