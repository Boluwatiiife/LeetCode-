// 3038. Maximum Number of Operations With the Same Score I

const maxOperations = function (nums) {
  let score = 1,
    sum = nums[0] + nums[1];

  for (let i = 2; i < nums.length; i += 2) {
    if (nums[i] + nums[i + 1] === sum) {
      score++;
    } else {
      break;
    }
  }
  return score;
};

console.log(maxOperations([3, 2, 1, 4, 5]));
console.log(maxOperations([1, 5, 3, 3, 4, 1, 3, 2, 2, 3]));
console.log(maxOperations([5, 3]));
