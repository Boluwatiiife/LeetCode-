// 167. Two Sum II - Input Array Is Sorted

const twoSum = function (numbers, target) {
  let n = numbers.length;
  let left = 0,
    right = n - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) left++;
    else right--;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([2, 3, 4, 5, 7, 11, 12], 10));
