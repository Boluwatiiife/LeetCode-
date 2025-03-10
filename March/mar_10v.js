// 2535. Difference Between Element Sum and Digit Sum of an Array

const differenceOfSum = function (nums) {
  let arr = [];
  for (no of nums) {
    let temp = no.toString();
    for (xx of temp) {
      arr.push(Number(xx));
    }
  }
  let x = arr.reduce((a, b) => a + b, 0);
  let y = nums.reduce((a, b) => a + b, 0);

  return Math.abs(x - y);
};

console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
