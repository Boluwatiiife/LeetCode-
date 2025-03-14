// 2784. Check if Array is Good

const isGood = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let count = new Map();
  let maxx = Math.max(...nums);

  if (maxx === nums.length - 1) {
    for (let i = 0; i < nums.length; i++) {
      let no = nums[i];
      count.set(no, (count.get(no) || 0) + 1);
      if (
        no === Math.max(...nums) &&
        i === nums.length - 1 &&
        count.get(no) === 2
      ) {
        return true;
      }
      if (count.get(no) > 1) return false;
    }
  }

  return false;
};

console.log(isGood([2, 1, 3]));
console.log(isGood([1, 3, 3, 2]));
console.log(isGood([1, 1]));
console.log(isGood([3, 4, 4, 1, 2, 1]));
console.log(isGood([9, 9]));
