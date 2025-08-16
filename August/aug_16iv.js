// 228. Summary Ranges

const summaryRanges = function (nums) {
  if (nums.length < 1) return nums;
  let arr = [];
  let temp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== temp[temp.length - 1] + 1) {
      if (temp.length > 1) {
        arr.push(`${temp[0]}->${temp[temp.length - 1]}`);
      } else {
        arr.push(`${temp[0]}`);
      }
      temp = [];
    }
    temp.push(nums[i]);
  }
  if (temp.length > 1) {
    arr.push(`${temp[0]}->${temp[temp.length - 1]}`);
  } else {
    arr.push(`${temp[0]}`);
  }
  return arr;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([]));
console.log(summaryRanges([1, 2, 3, 4, 7, 8, 9, 9]));
