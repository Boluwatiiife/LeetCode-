// 169. Majority Element
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = function (nums) {
  let groups = new Map();
  for (let num of nums) {
    if (!groups.has(num)) {
      groups.set(num, []);
    }
    groups.get(num).push(num);
  }
  const separateee = Array.from(groups.values());

  result = separateee.reduce((acc, sub_array) =>
    sub_array.length > acc.length ? sub_array : acc
  )[0];
  return result;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 3, 32]));
console.log(majorityElement([4, 1, 4, 1, 4]));

// a more time efficient solution

const element_the_most = function (nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};
console.log(element_the_most([3, 2, 3]));
console.log(element_the_most([2, 2, 1, 1, 1, 2, 2]));
console.log(element_the_most([4, 1, 4, 4, 4, 2]));
