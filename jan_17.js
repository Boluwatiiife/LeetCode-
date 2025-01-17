// Given an array of integers, find the two numbers sych that they add up to a specific target

const addUpIntegers = function (arr, intergerr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === intergerr) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
};

console.log(addUpIntegers([1, 2, 3, 4, 5, 6], 9));
console.log(addUpIntegers([1, 2, 11, 3, 21, 5], 13));
console.log(addUpIntegers([12, 20, 1, 9, 3, 2, 11, 54], 21));
console.log(addUpIntegers([3, 1, 3, 2, 2, 5], 4));

// optimal solution

const twoSumPairs = function (nums, target) {
  const seennn = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let second_num = target - nums[i];
    if (seennn.has(second_num)) {
      result.push([nums[i], second_num]);
    }
    seennn.set(nums[i], i);
  }
  return result;
};
console.log(twoSumPairs([1, 2, 3, 4, 5, 6], 9));
console.log(twoSumPairs([1, 2, 11, 3, 21, 5], 13));
console.log(twoSumPairs([12, 20, 1, 9, 3, 2, 11, 54], 21));
console.log(twoSumPairs([3, 1, 3, 2, 2, 5], 4));
console.log(twoSumPairs([3, 3, 2], 4));
