// 1014. Best Sightseeing Pair

const maxScoreSightseeingPair = function (values) {
  const n = values.length;

  let maxx = 0;
  let best = values[0];

  for (let i = 1; i < n; i++) {
    maxx = Math.max(maxx, best + values[i] - i);
    best = Math.max(best, values[i] + i);
  }

  return maxx;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
console.log(maxScoreSightseeingPair([1, 2]));
console.log(maxScoreSightseeingPair([1, 7, 3, 9, 1]));
