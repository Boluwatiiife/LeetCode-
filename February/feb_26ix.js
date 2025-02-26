// 1995. Count Special Quadruplets

const countQuadruplets = function (nums) {
  let n = nums.length;
  let resultt = 0;

  for (let a = 0; a < n - 3; a++) {
    for (let b = a + 1; b < n - 2; b++) {
      for (let c = b + 1; c < n - 1; c++) {
        for (let d = c + 1; d < n; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) {
            resultt++;
          }
        }
      }
    }
  }
  return resultt;
};

console.log(countQuadruplets([1, 2, 3, 6]));
console.log(countQuadruplets([3, 3, 6, 4, 5]));
console.log(countQuadruplets([1, 1, 1, 3, 5]));
console.log(countQuadruplets([28, 8, 49, 85, 37, 90, 20, 8]));
