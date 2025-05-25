// 2332. The Latest Time to Catch a Bus

const latestTimeCatchTheBus = function (buses, passengers, capacity) {
  buses.sort((a, b) => a - b);
  passengers.sort((a, b) => a - b);
  const set = new Set(passengers);
  let i = 0;
  let maxx = 0;

  for (const bus of buses) {
    let count = 0;
    while (i < passengers.length && passengers[i] <= bus && count < capacity) {
      i++;
      count++;
    }
    let temp = 0;
    if (count < capacity) temp = bus;
    else {
      temp = passengers[i - 1] - 1;
    }
    while (set.has(temp)) temp--;
    maxx = Math.max(maxx, temp);
  }
  return maxx;
};

console.log(latestTimeCatchTheBus([10, 20], [2, 17, 18, 19], 2));
console.log(
  latestTimeCatchTheBus([20, 30, 10], [19, 13, 26, 4, 25, 11, 21], 2)
);
console.log(
  latestTimeCatchTheBus([20, 30, 10], [19, 13, 26, 4, 25, 11, 21], 3)
);
console.log(latestTimeCatchTheBus([20, 30, 10], [19, 23, 4, 22, 11, 21], 3));
console.log(
  latestTimeCatchTheBus([20, 30, 10], [19, 23, 4, 10, 22, 11, 21], 3)
);
console.log(
  latestTimeCatchTheBus([10, 20, 30], [2, 4, 6, 10, 11, 19, 21, 22, 23], 3)
);
