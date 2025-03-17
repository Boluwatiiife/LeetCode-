// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum

const missingInteger = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    if (nums[i] !== nums[i + 1] - 1) break;
  }
  temp = arr.reduce((a, b) => a + b, 0);
  while (nums.includes(temp)) {
    temp++;
  }
  return temp;
};

console.log(missingInteger([1, 2, 3, 2, 5]));
console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]));
console.log(missingInteger([46, 8, 2, 4, 1, 4, 10, 2, 4, 10, 2, 5, 7, 3, 1]));
console.log(missingInteger([14, 9, 6, 9, 7, 9, 10, 4, 9, 9, 4, 4]));
