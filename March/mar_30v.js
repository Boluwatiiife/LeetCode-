// 78. Subsets

const subsets = function (nums) {
  let arr = [];
  let n = nums.length;

  for (let i = 0; i < 1 << n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        temp.push(nums[j]);
      }
    }
    arr.push(temp);
  }

  return arr;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
console.log(subsets([1, 2, 3, 4, 5, 6]));
