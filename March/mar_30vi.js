// 80. Remove Duplicates from Sorted Array II

const removeDuplicates = function (nums) {
  let n = nums.length;
  nums.push("_");
  let arr = [];

  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    temp.push(nums[i]);
    let sett = new Set(temp);
    if (sett.size > 1) {
      temp.pop();
      if (temp.length > 2) {
        arr.push(temp[0]);
        arr.push(temp[1]);
      } else {
        arr.push(...temp);
      }
      temp = [];
      i--;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = "_";
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
  return arr.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
