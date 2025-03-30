// 90. Subsets II

const subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b);
  arr = [];
  let n = nums.length;

  for (let i = 0; i < 1 << n; i++) {
    let temp = [];
    for (j = 0; j < n; j++) {
      if (i & (1 << j)) {
        temp.push(nums[j]);
      }
    }
    arr.push(temp);
  }
  //   return arr;
  const sett = new Set(arr.map((xx) => JSON.stringify(xx)));
  const anss = Array.from(sett, (strr) => JSON.parse(strr));
  return anss;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([4, 4, 4, 1, 4]));
