// 1518. Water Bottles

const numWaterBottles = function (numBottles, numExchange) {
  let arr = [];
  arr.push(numBottles);
  let bottles = numBottles;

  while (bottles / numExchange >= 1) {
    let diviii = Math.floor(bottles / numExchange);
    arr.push(diviii);
    let minuss = bottles - numExchange * diviii;
    bottles = diviii + minuss;
  }
  return arr.reduce((a, b) => a + b);
};

console.log(numWaterBottles(9, 3));
console.log(numWaterBottles(15, 4));
