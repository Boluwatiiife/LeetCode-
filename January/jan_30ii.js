// 628. Maximum Product of Three Numbers

const maximumProduct = function (nums) {
  const sortt = nums.sort((a, b) => a - b);
  //   return sortt;
  let three_arr = [];
  let two_arr = [];
  for (let i = sortt.length - 1; i >= sortt.length - 3; i--) {
    three_arr.push(nums[i]);
  }
  two_arr.push(nums[0]);
  two_arr.push(nums[1]);
  two_arr.push(nums[sortt.length - 1]);
  let firstt = three_arr.reduce((a, b) => a * b);
  let secondd = two_arr.reduce((a, b) => a * b);
  return Math.max(firstt, secondd);
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 5, 6]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
console.log(maximumProduct([3, 7, 5, 2, 1]));
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
