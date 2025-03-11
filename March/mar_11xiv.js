// 2651. Calculate Delayed Arrival Time

const findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  if (arrivalTime + delayedTime >= 24) return arrivalTime + delayedTime - 24;
  return arrivalTime + delayedTime;
};

console.log(findDelayedArrivalTime(15, 5));
console.log(findDelayedArrivalTime(13, 11));
console.log(findDelayedArrivalTime(3, 23));
