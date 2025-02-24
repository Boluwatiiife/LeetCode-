// 605. Can Place Flowers

const canPlaceFlowers = function (flowerbed, n) {
  let sum = 0;

  for (let j = 0; j < flowerbed.length; j++) {
    if (
      flowerbed[j] === 0 &&
      (j === 0 || flowerbed[j - 1] === 0) &&
      (flowerbed.length - 1 === j || flowerbed[j + 1] === 0)
    ) {
      flowerbed[j] = 1;
      sum++;
      if (sum >= n) {
        return true;
      }
    }
  }
  return sum >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
