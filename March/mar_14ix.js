// 2815. Max Pair Sum in an Array

const maxSum = function (nums) {
  let char = [];
  for (dig of nums) {
    let temp = dig.toString().split("").map(Number);
    char.push(Math.max(...temp));
  }

  let arr = [];
  for (let i = 0; i < char.length; i++) {
    let xxx = [];
    for (let j = 0; j < nums.length; j++) {
      let temp = nums[j].toString().split("").map(Number);
      if (Math.max(...temp) === char[i]) {
        xxx.push(nums[j]);
      }
    }
    xxx = xxx.sort((a, b) => b - a);
    if (xxx.length > 1) {
      arr.push(xxx[0] + xxx[1]);
    }
    xxx = [];
  }

  return arr.length > 0 ? Math.max(...arr) : -1;
};

console.log(maxSum([112, 131, 411]));
console.log(maxSum([2536, 1613, 3366, 162]));
console.log(maxSum([51, 71, 17, 24, 42]));
console.log(maxSum([31, 25, 72, 79, 74]));
console.log(maxSum([84, 91, 18, 59, 27, 9, 81, 33, 17, 58]));
console.log(maxSum([8, 75, 28, 35, 21, 13, 21]));
