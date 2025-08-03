// 3512. Minimum Operations to Make Array Sum Divisible by K

const minOperations = function (nums, k) {
  let temp = nums.reduce((a, b) => a + b, 0);
  if (temp < k) return temp;
  let ans = 0;

  while (temp % k !== 0) {
    temp--;
    ans++;
  }

  return ans;
};

console.log(minOperations([3, 9, 7], 5));
console.log(minOperations([4, 1, 3], 4));
console.log(minOperations([3, 2], 6));
console.log(minOperations([3, 3], 6));
