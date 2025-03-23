// 3477. Fruits Into Baskets II

const numOfUnplacedFruits = function (fruits, baskets) {
  let count = 0;
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (baskets[j] >= fruits[i]) {
        baskets[j] = 0;
        fruits[i] = "g";
        count++;
      }
    }
  }
  return fruits.length - count;
};

console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4]));
console.log(numOfUnplacedFruits([3, 6, 1], [6, 4, 7]));
console.log(numOfUnplacedFruits([4, 2, 5, 3], [3, 5, 4, 3]));
