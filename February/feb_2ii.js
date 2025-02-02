// 747. Largest Number At Least Twice of Others

const dominantIndex = function (nums) {
  const maxx = Math.max(...nums);
  const indexx = nums.indexOf(maxx);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxx) {
      nums.splice(i, 1);
    }
  }
  if (nums.every((xx) => xx * 2 <= maxx)) {
    return indexx;
  }
  return -1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([3, 4, 2, 1, 10]));
