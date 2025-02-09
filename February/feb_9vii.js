// 1295. Find Numbers with Even Number of Digits

const findNumbers = function (nums) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    let arr = nums[i].toString().split("");
    // return arr.length;
    let num = arr.length;
    if (num % 2 === 0) {
      ans = ans + 1;
    }
  }
  return ans;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
console.log(findNumbers([11, 2, 343, 5454, 65555, 7777]));
