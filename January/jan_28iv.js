// 575. Distribute Candies

const distributeCandies = function (candyType) {
  const lengthh = candyType.length;
  //   return lengthh;
  let uniquee = [];
  for (let i = 0; i < candyType.length; i++) {
    if (!uniquee.includes(candyType[i])) {
      uniquee.push(candyType[i]);
    }
  }
  if (lengthh / 2 === uniquee.length) {
    return uniquee.length;
  }
  if (lengthh / 2 < uniquee.length) {
    return lengthh / 2;
  }
  return uniquee.length;
  //   return uniquee;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
console.log(distributeCandies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// time efficient solution
const candiessDistroo = function (candyType) {
  const uniquee = new Set(candyType);
  //   return uniquee;

  const max_candies = candyType.length / 2;

  return Math.min(uniquee.size, max_candies);
};
console.log(candiessDistroo([1, 1, 2, 2, 3, 3]));
console.log(candiessDistroo([1, 1, 2, 3]));
console.log(candiessDistroo([6, 6, 6, 6]));
console.log(candiessDistroo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
