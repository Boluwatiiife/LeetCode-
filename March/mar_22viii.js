// 3396. Minimum Number of Operations to Make Elements in Array Distinct

const minimumOperations = function (nums) {
  let arr = new Set(nums);

  let countt = 1;
  if (arr.size === nums.length) return 0;

  for (let i = 3; i < nums.length; i += 3) {
    let temp = nums.slice(i);
    arr = new Set(temp);
    if (arr.size !== temp.length) {
      countt++;
    }
  }
  return countt;
};

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
console.log(minimumOperations([4, 5, 6, 4, 4]));
console.log(minimumOperations([6, 7, 8, 9]));
console.log(minimumOperations([5, 5]));
console.log(minimumOperations([3, 7, 7, 3]));
