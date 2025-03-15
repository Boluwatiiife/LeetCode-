// 2848. Points That Intersect With Cars

const numberOfPoints = function (nums) {
  let uniquee = new Set();

  for (arr of nums) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      uniquee.add(i);
    }
  }
  return uniquee.size;
};

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ])
);
console.log(
  numberOfPoints([
    [1, 3],
    [5, 8],
  ])
);
