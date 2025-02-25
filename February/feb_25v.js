// 1920. Build Array from Permutation

const buildArray = function (nums) {
  let arr = [];
  for (xx of nums) {
    arr.push(nums[xx]);
  }
  return arr;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));
