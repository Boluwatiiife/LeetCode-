// 2300. Successful Pairs of Spells and Potions

const successfulPairs = function (spells, potions, success) {
  const m = potions.length;
  potions.sort((a, b) => a - b);
  let arr = [];

  for (temp of spells) {
    let left = 0,
      right = m - 1;
    let dex = m;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (temp * potions[mid] >= success) {
        dex = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    arr.push(m - dex);
  }
  return arr;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
