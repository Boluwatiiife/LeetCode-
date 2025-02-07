// 1103. Distribute Candies to People

const distributeCandies = function (candies, num_people) {
  let arr = new Array(num_people).fill(0);
  //   return arr;
  let index = 0;

  let add = 1;

  while (true) {
    // let add = 1;
    arr[index] = arr[index] + add;

    if (arr.reduce((a, b) => a + b) === candies) break;

    if (arr.reduce((a, b) => a + b) > candies) {
      arr[index] = arr[index] + candies - arr.reduce((a, b) => a + b);
      break;
    }

    add += 1;

    index = (index + 1) % arr.length;
  }
  return arr;
};

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
console.log(distributeCandies(60, 4));

// optimized solution

const candyyMann = function (candies, num_people) {
  const result = new Array(num_people).fill(0);
  let i = 0;
  let candyCount = 1;

  while (candies > 0) {
    result[i % num_people] += Math.min(candyCount, candies);
    candies -= candyCount;
    candyCount++;
    i++;
  }
  return result;
};
console.log(candyyMann(7, 4));
console.log(candyyMann(10, 3));
console.log(candyyMann(60, 4));
