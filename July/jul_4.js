// 492. Construct the Rectangle

const constructRectangle = function (area) {
  let w = Math.floor(Math.sqrt(area));
  let l = Math.floor(area / w);

  while (l * w !== area) {
    w--;
    l = Math.floor(area / w);
  }
  return [l, w];
};

console.log(constructRectangle(4));
console.log(constructRectangle(37));
console.log(constructRectangle(122122));
