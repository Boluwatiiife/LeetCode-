// 3095. Shortest Subarray With OR at Least K I

const minimumSubarrayLength = function (nums, k) {
  let xor = 0;
  count = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let temp = [];
    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j]);
      let temppp = [...temp];
      for (no of temppp) {
        xor |= no;
      }
      if (xor >= k) {
        count = Math.min(count, temppp.length);
      }
      xor = 0;
    }
  }
  return count !== Infinity ? count : -1;
};

console.log(minimumSubarrayLength([1, 2, 3], 2));
console.log(minimumSubarrayLength([2, 1, 8], 10));
console.log(minimumSubarrayLength([1, 2], 0));
console.log(minimumSubarrayLength([32, 1, 25, 11, 2], 59));
