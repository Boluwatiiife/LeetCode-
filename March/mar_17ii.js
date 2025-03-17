// 2974. Minimum Number Game

const numberGame = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < nums.length; i += 2) {
    arr.push(nums[i + 1]);
    arr.push(nums[i]);
  }

  return arr;
};

console.log(numberGame([5, 4, 2, 3]));
console.log(numberGame([2, 5]));
