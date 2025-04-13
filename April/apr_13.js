// 1004. Max Consecutive Ones III

const longestOnes = function (nums, k) {
  let n = nums.length;
  let left = 0;
  let maxx = 0;
  let zero_count = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] === 0) zero_count++;

    while (zero_count > k) {
      if (nums[left] === 0) zero_count--;
      left++;
    }
    maxx = Math.max(maxx, right - left + 1);
  }

  return maxx;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0));
console.log(longestOnes([0, 0, 1, 1], 1));
