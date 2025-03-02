// 2148. Count Elements With Strictly Smaller and Greater Elements

const countElements = function (nums) {
  let minn = Math.min(...nums);
  let maxx = Math.max(...nums);

  let anss = nums.filter((xx) => xx !== minn && xx !== maxx);
  return anss.length;
};

console.log(countElements([11, 7, 2, 15]));
console.log(countElements([-3, 3, 3, 90]));
console.log(countElements([-3, 3, 3, 5, 90]));
console.log(countElements([1, 2, 3, 3]));
