// 46. Permutations

const permute = function (nums) {
  let arr = [];
  let n = nums.length;

  function backtrackk(start) {
    if (start === n) {
      arr.push([...nums]);
      return;
    }

    for (let i = start; i < n; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrackk(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrackk(0);
  return arr;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
console.log(permute([1, 2, 3, 4]));
