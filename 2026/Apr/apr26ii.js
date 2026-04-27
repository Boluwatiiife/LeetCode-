// 3912. Valid Elements in an Array

const findValidElements = function (nums) {
  const n = nums.length;
  if (n < 3) return nums;

  const maxx = Math.max(...nums);
  let firstdex = nums.indexOf(maxx);
  let lastdex = nums.lastIndexOf(maxx);
  let one = [nums[0]];
  let two = [nums[n - 1]];

  for (let i = 1; i < n; i++) {
    if (nums[i] > one[one.length - 1] && i !== n - 1) one.push(nums[i]);
    if (nums[i] === maxx) break;
  }
  for (let i = n - 2; i > 0; i--) {
    if (firstdex === lastdex && nums[i] === maxx) break;
    if (nums[i] > two[0] && i !== 0) two.unshift(nums[i]);
    if (nums[i] === maxx) break;
  }

  //   return [one, two];
  return [...one, ...two];
};

console.log(findValidElements([1, 2, 4, 2, 3, 2]));
console.log(findValidElements([1, 2, 4, 3, 2]));
console.log(findValidElements([5, 5, 5, 5]));
console.log(findValidElements([1]));
console.log(findValidElements([9, 9, 8]));
console.log(findValidElements([6, 9, 7]));
console.log(findValidElements([6, 9, 9, 7]));
console.log(findValidElements([4, 1, 7, 7]));
console.log(findValidElements([2, 10]));
console.log(findValidElements([2, 2, 7]));
console.log(findValidElements([3, 2, 2, 1]));
