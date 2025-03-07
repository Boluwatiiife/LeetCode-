// 2341. Maximum Number of Pairs in Array

const numberOfPairs = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
      nums.splice(i, 2);
      i--;
    }
  }

  return nums.length > 0 ? [count, nums.length] : [count, 0];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPairs([1, 1]));
console.log(numberOfPairs([0]));
