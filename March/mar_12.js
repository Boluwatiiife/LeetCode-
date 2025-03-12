// 2670. Find the Distinct Difference Array

const distinctDifferenceArray = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let before = nums.slice(0, i);
    before.push(nums[i]);
    let after = nums.slice(i + 1);
    let beforee = new Set(before);
    let afterr = new Set(after);

    arr.push(beforee.size - afterr.size);
  }
  return arr;
};

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
console.log(distinctDifferenceArray([3, 2, 3, 4, 2]));
