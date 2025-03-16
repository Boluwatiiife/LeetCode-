// 2928. Distribute Candies Among Children I

const distributeCandies = function (n, limit) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
        if (i + j + k === n && Math.max(i, j, k) <= limit) {
          sum++;
        }
      }
    }
  }
  return sum;
};

console.log(distributeCandies(5, 2));
console.log(distributeCandies(3, 3));
console.log(distributeCandies(4, 4));
