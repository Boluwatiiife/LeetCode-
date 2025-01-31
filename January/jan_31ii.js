// 645. Set Mismatch

const findErrorNums = function (nums) {
  let count = new Map();
  let duplicate, missing;

  // count occurences of each number
  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  // find duplicate and missing numbers
  for (let i = 1; i <= nums.length; i++) {
    if (count.has(i) && count.get(i) === 2) {
      duplicate = i;
    }
    if (!count.has(i)) {
      missing = i;
    }
  }
  return [duplicate, missing];
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([1, 2, 3, 3, 5]));
console.log(findErrorNums([2, 2]));
console.log(findErrorNums([1, 2, 2, 4, 6]));
