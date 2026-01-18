// 3769. Sort Integers by Binary Reflection

const sortByReflection = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let arr = Array(n);

  for (let i = 0; i < n; i++)
    arr[i] = parseInt(nums[i].toString(2).split("").reverse().join(""), 2);

  let xx = [];
  for (let i = 0; i < n; i++) xx.push([i, arr[i]]);
  xx.sort((a, b) => a[1] - b[1]);

  let ans = [];
  for (const [x, y] of xx) ans.push(nums[x]);

  return ans;
};

console.log(sortByReflection([4, 5, 4]));
console.log(sortByReflection([3, 6, 5, 8]));
console.log(sortByReflection([8, 2]));
