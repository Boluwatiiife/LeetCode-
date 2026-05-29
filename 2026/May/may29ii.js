// 492. Construct the Rectangle

const constructRectangle = function (area) {
  let two = Math.floor(Math.sqrt(area));
  let one = Math.floor(area / two);

  while (one * two !== area) {
    two--;
    one = Math.floor(area / two);
  }

  return [one, two];
};

console.log(constructRectangle(4));
console.log(constructRectangle(37));
console.log(constructRectangle(122122));
console.log(constructRectangle(12));
console.log(constructRectangle(10));
