// 2574. Left and Right Sum Differences

const leftRightDifference = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let before = nums.slice(0, i);
    let after = nums.slice(i + 1);

    let xxx = before.reduce((a, b) => a + b, 0);
    let yyy = after.reduce((a, b) => a + b, 0);

    arr.push(Math.abs(xxx - yyy));
  }

  return arr;
};

console.log(leftRightDifference([10, 4, 8, 3]));
console.log(leftRightDifference([1]));
