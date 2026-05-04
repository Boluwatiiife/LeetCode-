// 2848. Points That Intersect With Cars

const numberOfPoints = function (nums) {
  let sett = new Set();

  for (const [one, two] of nums) {
    for (let i = one; i <= two; i++) sett.add(i);
  }

  return sett.size;
};

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ]),
);
console.log(
  numberOfPoints([
    [1, 3],
    [5, 8],
  ]),
);
