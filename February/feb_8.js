// 1122. Relative Sort Array

const relativeSortArray = function (arr1, arr2) {
  let xxx = [];
  for (num of arr1) {
    if (!arr2.includes(num)) {
      xxx.push(num);
    }
  }
  xxx = xxx.sort((a, b) => a - b);
  //   return xxx;
  let nums = [];

  for (let i = 0; i < arr2.length; i++) {
    for (num of arr1) {
      if (arr2[i] === num) {
        nums.push(num);
      }
    }
  }
  for (num of xxx) {
    nums.push(num);
  }
  return nums;
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));

// optimized solution.
const sort_relative_array = function (arr1, arr2) {
  const frequency = new Map();
  const remaining = [];

  for (const num of arr1) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }
  //   return frequency;
  const result = [];

  for (const num of arr2) {
    if (frequency.has(num)) {
      result.push(...Array(frequency.get(num)).fill(num));
      frequency.delete(num);
    }
  }
  for (const [num, count] of frequency.entries()) {
    remaining.push(...Array(count).fill(num));
  }
  remaining.sort((a, b) => a - b);
  return result.concat(remaining);
};

console.log(
  sort_relative_array([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
console.log(sort_relative_array([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
