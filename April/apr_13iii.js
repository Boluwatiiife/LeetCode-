// 1004. Max Consecutive Ones III

const longestOnes = function (nums, k) {
  let n = nums.length;
  let maxx = 0;
  let zero = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] === 0) zero++;

    while (zero > k) {
      if (nums[left] === 0) zero--;
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
