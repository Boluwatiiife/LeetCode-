// 2563. Count the Number of Fair Pairs

const countFairPairs = function (nums, lower, upper) {
  nums = nums.sort((a, b) => a - b);

  const count_pairs_with_sum_lessThan = (target) => {
    let left = 0,
      right = nums.length - 1;
    let count = 0;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
    return count;
  };

  return (
    count_pairs_with_sum_lessThan(upper + 1) -
    count_pairs_with_sum_lessThan(lower)
  );
};

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6));
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11));
