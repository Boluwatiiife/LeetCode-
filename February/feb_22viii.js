// 1752. Check if Array Is Sorted and Rotated

const check = function (nums) {
  let stringg = nums.join(",");
  let sortt = nums.sort((a, b) => a - b).join(",");

  if ((stringg + "," + stringg).includes(sortt)) return true;
  return false;
};

console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([1, 2, 3]));
console.log(check([11, 11, 1, 20]));
console.log(check([6, 7, 8, 9, 4, 5]));
