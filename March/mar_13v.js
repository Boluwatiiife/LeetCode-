// 2717. Semi-Ordered Permutation

const semiOrderedPermutation = function (nums) {
  let one = 1,
    n = nums.length;

  let x, y;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === one) {
      x = i;
    }
    if (nums[i] === n) {
      y = i;
    }
  }
  return x < y ? x + (n - y - 1) : x + (n - y - 1) - 1;
};

console.log(semiOrderedPermutation([2, 1, 4, 3]));
console.log(semiOrderedPermutation([2, 4, 1, 3]));
console.log(semiOrderedPermutation([1, 3, 4, 2, 5]));
