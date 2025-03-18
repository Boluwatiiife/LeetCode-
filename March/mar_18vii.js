// 3028. Ant on the Boundary

const returnToBoundaryCount = function (nums) {
  let count = 0,
    anss = 0;

  for (no of nums) {
    if (no > 0) {
      count += no;
    }
    if (no < 0) {
      count += no;
    }
    if (count === 0) {
      anss++;
    }
  }
  return anss;
};

console.log(returnToBoundaryCount([2, 3, -5]));
console.log(returnToBoundaryCount([3, 2, -3, -4]));
