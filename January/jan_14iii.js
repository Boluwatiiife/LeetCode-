// 217. Contains Duplicate

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

const containsDuplicate = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 4, 3, 3, 3, 2, 2, 2, 1]));

// time efficient solution

const duplicateeee = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};
console.log(duplicateeee([1, 2, 3, 1]));
console.log(duplicateeee([1, 2, 3, 4]));
console.log(duplicateeee([1, 2, 3, 4, 3, 3, 3, 2]));
