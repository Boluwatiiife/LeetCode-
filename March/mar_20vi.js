// 3178. Find the Child Who Has the Ball After K Seconds

const numberOfChild = function (n, k) {
  let direction = 1;
  let index = 0;

  for (let i = 0; i < k; i++) {
    index += direction;
    if (index === n - 1 || index === 0) {
      direction *= -1;
    }
  }
  return index;
};

console.log(numberOfChild(3, 5));
console.log(numberOfChild(5, 6));
console.log(numberOfChild(4, 2));
console.log(numberOfChild(2, 2));
console.log(numberOfChild(2, 3));
