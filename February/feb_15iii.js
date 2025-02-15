// 1431. Kids With the Greatest Number of Candies

const kidsWithCandies = function (candies, extraCandies) {
  let maxx = Math.max(...candies);
  let resultt = [];
  for (num of candies) {
    if (num + extraCandies >= maxx) {
      resultt.push(true);
    } else {
      resultt.push(false);
    }
  }
  return resultt;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
