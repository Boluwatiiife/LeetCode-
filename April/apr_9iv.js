// 56. 132 Pattern
const find132pattern = function (nums) {
  let sub = [];
  let third = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < third) return true;

    while (sub.length && nums[i] > sub[sub.length - 1]) {
      third = sub.pop();
    }
    sub.push(nums[i]);
  }

  return false;
};

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
console.log(find132pattern([3, 5, 0, 3, 4]));
console.log(find132pattern([-2, 1, 2, -2, 1, 2]));
