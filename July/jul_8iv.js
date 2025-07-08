// 724. Find Pivot Index

const pivotIndex = function (nums) {
  //   let prefix = [nums[0]];
  //   for (let i = 1; i < nums.length; i++) {
  //     prefix.push(prefix[prefix.length - 1] + nums[i]);
  //   }

  for (let i = 0; i < nums.length; i++) {
    let beff = nums.slice(0, i);
    let afff = nums.slice(i + 1, nums.length);
    let one = beff.length < 1 ? 0 : beff.reduce((a, b) => a + b, 0);
    let two = afff.length < 1 ? 0 : afff.reduce((a, b) => a + b, 0);
    if (one === two) return i;
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
