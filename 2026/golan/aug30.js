// 2091. Removing Minimum and Maximum From Array

const minimumDeletions = function (nums) {
  let minn = Infinity,
    maxx = -Infinity,
    n = nums.length;
  let dexMin;
  let dexMax;

  for (let i = 0; i < n; i++) {
    if (nums[i] < minn) {
      minn = nums[i];
      dexMin = i;
    }
    if (nums[i] > maxx) {
      maxx = nums[i];
      dexMax = i;
    }
  }

  let ma = Math.max(dexMax, dexMin);
  let mi = Math.min(dexMax, dexMin);
  let ans = Infinity;

  ans = Math.min(ans, ma - 0 + 1);
  ans = Math.min(ans, n - mi);
  ans = Math.min(ans, n - ma + (mi - 0 + 1));

  return ans;
};

console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6]));
console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5]));
console.log(minimumDeletions([101]));
console.log(minimumDeletions([-87482]));
console.log(minimumDeletions([-87482, 1]));
console.log(minimumDeletions([-8, -1, 0]));
