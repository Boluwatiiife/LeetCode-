// best sum
// return the shortest array that sums up to a target

const bestSUm = (target_sum, numbers, memo = {}) => {
  if (target_sum in memo) return memo[target_sum];
  if (target_sum === 0) return [];
  if (target_sum < 0) return null;

  let shortest_combo = null;

  for (let num of numbers) {
    const remainder = target_sum - num;
    const remainder_combo = bestSUm(remainder, numbers, memo);
    if (remainder_combo !== null) {
      const comboo = [...remainder_combo, num];
      if (shortest_combo === null || comboo.length < shortest_combo.length) {
        shortest_combo = comboo;
      }
    }
  }

  memo[target_sum] = shortest_combo;
  return shortest_combo;
};

console.log(bestSUm(7, [5, 3, 4, 7]));
console.log(bestSUm(8, [2, 3, 5]));
console.log(bestSUm(8, [1, 4, 5]));
console.log(bestSUm(100, [1, 2, 5, 25]));
console.log(bestSUm(1, [1, 2, 5]));
console.log(bestSUm(1000, [1, 2, 5, 50]));
