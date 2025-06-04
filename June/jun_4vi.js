// 1011. Capacity To Ship Packages Within D Days

const shipWithinDays = function (weights, days) {
  function canShipInDays(capacity) {
    let daysNeeded = 1;
    let currentLoad = 0;

    for (let weight of weights) {
      if (currentLoad + weight > capacity) {
        daysNeeded++;
        currentLoad = 0;
      }
      currentLoad += weight;
    }
    return daysNeeded <= days;
  }
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canShipInDays(mid)) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
