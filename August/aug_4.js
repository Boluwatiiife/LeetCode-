// 3516. Find Closest Person

const findClosest = function (x, y, z) {
  return Math.abs(z - y) > Math.abs(z - x)
    ? 1
    : Math.abs(z - y) < Math.abs(z - x)
    ? 2
    : 0;
};

console.log(findClosest(2, 7, 4));
console.log(findClosest(2, 5, 6));
console.log(findClosest(1, 5, 3));
