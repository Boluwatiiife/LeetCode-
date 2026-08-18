// 3471. Find the Largest Almost Missing Integer

const largestInteger = function (nums, k) {
  let mapp = new Map();
  let ans = -1;

  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);

    if (arr.length === k) {
      const arrrr = [...new Set(arr)];
      for (no of arrrr) {
        mapp.set(no, (mapp.get(no) || 0) + 1);
      }
      arr.shift();
    }
  }

  for (no of nums) if (mapp.get(no) === 1) ans = Math.max(ans, no);

  return ans;
};

console.log(largestInteger([3, 9, 2, 1, 7], 3));
console.log(largestInteger([3, 9, 7, 2, 1, 7], 4));
console.log(largestInteger([0, 0], 1));
console.log(largestInteger([0, 0], 2));
