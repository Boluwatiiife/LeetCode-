// 3069. Distribute Elements Into Two Arrays I

const resultArray = function (nums) {
  let one = [nums[0]],
    two = [nums[1]];

  for (let i = 2; i < nums.length; i++) {
    if (one[one.length - 1] > two[two.length - 1]) one.push(nums[i]);
    else two.push(nums[i]);
  }

  return [...one, ...two];
};

console.log(resultArray([2, 1, 3]));
console.log(resultArray([5, 4, 3, 8]));
