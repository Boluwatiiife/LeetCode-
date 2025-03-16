// 2960. Count Tested Devices After Test Operations

const countTestedDevices = function (batteryPercentages) {
  let count = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      count++;
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
      }
    }
  }
  return count;
};

console.log(countTestedDevices([1, 1, 2, 1, 3]));
console.log(countTestedDevices([0, 1, 2]));
