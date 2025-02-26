// 1991. Find the Middle Index in Array

const findMiddleIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let before = nums.slice(0, i);
    let after = nums.slice(i + 1);
    let xxx = before.reduce((a, b) => a + b, 0);
    let yyy = after.reduce((a, b) => a + b, 0);
    if (xxx === yyy) {
      return i;
    }
  }
  return -1;
};

console.log(findMiddleIndex([2, 3, -1, 8, 4]));
console.log(findMiddleIndex([1, -1, 4]));
console.log(findMiddleIndex([2, 5]));
