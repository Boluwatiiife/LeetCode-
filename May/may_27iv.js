// 2592. Maximize Greatness of an Array

const maximizeGreatness = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let i = 0,
    j = 1;
  let count = 0;

  while (i < n && j < n) {
    if (nums[i] < nums[j]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};

console.log(maximizeGreatness([1, 3, 5, 2, 1, 3, 1]));
console.log(maximizeGreatness([1, 2, 3, 4]));
