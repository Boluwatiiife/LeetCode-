// 1870. Minimum Speed to Arrive on Time

const minSpeedOnTime = function (dist, hour) {
  function total(arr, mid, hour) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        sum += arr[i] / mid;
        break;
      }
      sum += Math.ceil(arr[i] / mid);
    }
    return sum <= hour;
  }
  let low = 1;
  let high = 10000000;
  let min = Infinity;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (total(dist, mid, hour)) {
      min = Math.min(min, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return min === Infinity ? -1 : min;
};

console.log(minSpeedOnTime([1, 3, 2], 6));
console.log(minSpeedOnTime([1, 3, 2], 2.7));
console.log(minSpeedOnTime([1, 3, 2], 1.9));
console.log(minSpeedOnTime([1, 1, 100000], 2.01));
