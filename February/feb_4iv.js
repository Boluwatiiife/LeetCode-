// 896. Monotonic Array

const isMonotonic = function (nums) {
  let incre = true;
  let decre = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decre = false;
    }
    if (nums[i] < nums[i - 1]) {
      incre = false;
    }
  }
  return incre || decre;
};

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([2, 2, 1]));
console.log(isMonotonic([2, 2, 2, 2, 2, 3, 3]));
console.log(isMonotonic([1, 1, 0]));
console.log(isMonotonic([5, 5, 5, 5, 5, 4, 4, 3, 3, 5]));
