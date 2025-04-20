// 2260. Minimum Consecutive Cards to Pick Up

const minimumCardPickup = function (cards) {
  let n = cards.length;
  let min = Infinity;

  let last_index = new Map();
  last_index.set(cards[0], 0);

  for (let i = 1; i < n; i++) {
    let dex = last_index.get(cards[i]);
    if (dex !== undefined) {
      min = Math.min(min, i - dex + 1);
    }
    last_index.set(cards[i], i);
  }

  return min === Infinity ? -1 : min;
};

console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]));
console.log(minimumCardPickup([1, 0, 5, 3]));
console.log(minimumCardPickup([3, 4, 2, 3, 4, 7, 3, 3, 0, 7, 4, 2]));
console.log(minimumCardPickup([1, 1, 0, 5, 3]));
