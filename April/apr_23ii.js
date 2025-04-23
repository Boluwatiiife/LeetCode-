// 904. Fruit Into Baskets

const totalFruit = function (fruits) {
  let n = fruits.length;
  let left = 0;
  let maxx = 0;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    const fruitt = fruits[i];
    map.set(fruitt, (map.get(fruitt) || 0) + 1);

    while (map.size > 2) {
      let left_fruit = fruits[left];
      map.set(left_fruit, map.get(left_fruit) - 1);
      if (map.get(left_fruit) === 0) map.delete(left_fruit);
      left++;
    }
    maxx = Math.max(maxx, i - left + 1);
  }
  return maxx;
};

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log(totalFruit([1, 1, 2, 2, 3, 2, 2]));
console.log(totalFruit([1, 1, 2, 2, 3, 2, 2, 1]));
