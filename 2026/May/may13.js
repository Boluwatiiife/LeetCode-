// 3925. Concatenate Array With Reverse

const concatWithReverse = function (nums) {
  return [...nums, ...nums.reverse()];
};

console.log(concatWithReverse([1, 2, 3]));
console.log(concatWithReverse([1]));
