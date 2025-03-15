// 2869. Minimum Operations to Collect Elements

const minOperations = function (nums, k) {
  let full = Array.from({ length: k }, (_, i) => i + 1);

  let arr = [];
  let count = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    arr.push(nums[i]);
    count++;

    let ans = full.every((no) => arr.includes(no));
    if (ans === true) {
      return count;
    }
  }
};

console.log(minOperations([3, 1, 5, 4, 2], 2));
console.log(minOperations([3, 1, 5, 4, 2], 5));
console.log(minOperations([3, 2, 5, 3, 1], 3));
