// 2411. Smallest Subarrays With Maximum Bitwise OR

const smallestSubarrays = function (nums) {
  const n = nums.length;
  let ans = new Array(n);
  ans[n - 1] = 1;
  let maxx;

  let left = 0;
  maxx = nums.slice(left, n).reduce((a, b) => a | b, 0);
  let temp = [];

  for (let right = 0; right < n; right++) {
    temp.push(nums[right]);
    if (temp.reduce((a, b) => a | b, 0) === maxx) {
      ans[left] = temp.length;
      left++;
      maxx = nums.slice(left, n).reduce((a, b) => a | b, 0);
      right = left - 1;
      temp = [];
    }
  }

  return ans;
};

console.log(smallestSubarrays([1, 0, 2, 1, 3]));
console.log(smallestSubarrays([1, 2]));
console.log(smallestSubarrays([4, 0, 5, 6, 3, 2]));
// console.log(3 | 2);
// console.log(3);
// console.log(1 | 2 | 3);
