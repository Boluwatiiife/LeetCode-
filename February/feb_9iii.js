// 1217. Minimum Cost to Move Chips to The Same Position

const minCostToMoveChips = function (position) {
  let even_count = 0,
    odd_count = 0;

  for (pos of position) {
    if (pos % 2 === 0) {
      even_count++;
    } else {
      odd_count++;
    }
  }
  return Math.min(even_count, odd_count);
};

console.log(minCostToMoveChips([1, 2, 3]));
console.log(minCostToMoveChips([1, 2, 3, 4, 5, 6]));
console.log(minCostToMoveChips([1, 1000000000]));
