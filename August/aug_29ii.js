// 3021. Alice and Bob Playing Flower Game

const flowerGame = function (n, m) {
  return Math.floor((n * m) / 2);
};

console.log(flowerGame(3, 2)); //3
console.log(flowerGame(1, 1)); // 0
console.log(flowerGame(2, 4)); // 4
console.log(flowerGame(4, 4)); // 8
console.log(flowerGame(4, 9)); // 18
console.log(flowerGame(58280, 69389)); // 2021995460
console.log(flowerGame(1, 2));
console.log(flowerGame(1, 5));
