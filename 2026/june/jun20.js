// 3936. Minimum Swaps to Move Zeros to End

const minimumSwaps = function (nums) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      count++;
    }
  }

  let ans = 0;
  for (let i = n - count; i < n; i++) {
    if (nums[i] !== 0) ans++;
  }

  return ans;
};

console.log(minimumSwaps([0, 1, 0, 3, 12]));
console.log(minimumSwaps([0, 0, 0, 1, 0, 3, 12]));
console.log(minimumSwaps([0, 0, 0, 0, 0, 3, 12]));
console.log(minimumSwaps([0, 1, 0, 2]));
console.log(minimumSwaps([1, 2, 0]));
