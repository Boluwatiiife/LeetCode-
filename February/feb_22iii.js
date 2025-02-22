// 1725. Number Of Rectangles That Can Form The Largest Square

const countGoodRectangles = function (rectangles) {
  let minns = [];
  for (let i = 0; i < rectangles.length; i++) {
    minns.push(Math.min(...rectangles[i]));
  }
  let maxx = Math.max(...minns);
  let resultt = 0;
  for (num of minns) {
    if (num === maxx) {
      resultt++;
    }
  }
  return resultt;
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
);
console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
);
