// 485. Max Consecutive Ones

const findMaxConsecutiveOnes = function (nums) {
  let max_count = 0;
  let current_count = 0;

  for (let num of nums) {
    if (num === 1) {
      current_count++;
      max_count = Math.max(max_count, current_count);
    } else {
      current_count = 0;
    }
  }
  return max_count;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 0, 1]));
