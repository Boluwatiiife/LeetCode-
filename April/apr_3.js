// 189. Rotate Array

const rotate = function (nums, k) {
  let n = nums.length;
  let count = 0;

  while (count < k) {
    let temp = nums[n - 1];
    nums.pop();
    nums.splice(0, 0, temp);
    count++;
  }
  return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([1, 2], 3));
// console.log(rotate([1, 2, 3], 4));
function reversee(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

const rotateee = function (nums, k) {
  let n = nums.length;
  k = k % n;

  // reverse the entire array
  reversee(nums, 0, n - 1);

  // reverse the first K elements
  reversee(nums, 0, k - 1);

  // reverse remaining elements
  reversee(nums, k, n - 1);

  return nums;
};
console.log(rotateee([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateee([-1, -100, 3, 99], 2));
console.log(rotateee([1, 2], 3));
console.log(rotateee([1, 2, 3], 4));
