// 3637. Trionic Array I

const isTrionic = function (nums) {
  const n = nums.length;
  if (n < 4) return false;
  let arr = [];

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      arr.push([nums.splice(0, i), i]);
      //   return arr;
      for (let j = i + 1; j < n; j++) {
        if (nums[j] > nums[j - 1]) {
          arr.push(nums.splice(i + 1, j));
          //   if (j === n - 1) return true;
          for (let k = j + 1; k < n; k++) {
            if (nums[k] < nums[k - 1]) {
              arr.push(nums.splice(j + 1, k));
            }
            if (k !== n - 1) return false;
          }
        }
      }
    }
  }

  return arr;
  return false;
};
console.log(isTrionic([1, 3, 5, 4, 2, 6]));
console.log(isTrionic([2, 1, 3]));
console.log(isTrionic([3, 5, 1, 5, 1]));
console.log(isTrionic([8, 1, 2, 4]));
