// 3100. Water Bottles II

const maxBottlesDrunk = function (numBottles, numExchange) {
  let ans = numBottles;

  while (true) {
    let count = 0;
    while (numBottles >= numExchange) {
      numBottles -= numExchange;
      numExchange++;
      count++;
    }
    ans += count;
    numBottles += count;
    if (numBottles < numExchange) break;
  }

  return ans;
};

console.log(maxBottlesDrunk(13, 6));
console.log(maxBottlesDrunk(10, 3));
