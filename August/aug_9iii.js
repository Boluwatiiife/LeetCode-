// 3637. Trionic Array I

const isTrionic = function (nums) {
  if (nums[1] <= nums[0]) return false;
  function check(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) return true;
    }
    return false;
  }
  if (check(nums)) return false;
  function sortt(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
  }
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      for (let j = i + 1; j < n; j++) {
        if (nums[j] >= nums[j - 1]) {
          const arr = nums.slice(j - 1, n);
          return sortt(arr);
        }
      }
    }
  }
  return false;
};

console.log(isTrionic([1, 3, 5, 4, 2, 6]));
console.log(isTrionic([1, 3, 5, 4, 5, 2, 6]));
console.log(isTrionic([2, 1, 3]));
console.log(isTrionic([1, 2, 3]));
console.log(isTrionic([6, 8, 2, 5, 9]));
console.log(isTrionic([8, 9, 4, 6, 1]));
