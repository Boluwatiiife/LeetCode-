// 1128. Number of Equivalent Domino Pairs

const numEquivDominoPairs = function (dominoes) {
  const frequency = new Map();
  let count = 0;
  for (const [a, b] of dominoes) {
    const key = a < b ? `${a},${b}` : `${b},${a}`;

    if (frequency.has(key)) {
      count += frequency.get(key);
      frequency.set(key, frequency.get(key) + 1);
    } else {
      frequency.set(key, 1);
    }
  }
  //   return frequency;
  return count;
};

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
console.log(
  numEquivDominoPairs([
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 2],
  ])
);
console.log(
  numEquivDominoPairs([
    [1, 1],
    [2, 2],
    [1, 1],
    [1, 2],
    [1, 2],
    [1, 1],
  ])
);
