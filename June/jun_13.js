// 2187. Minimum Time to Complete Trips

const minimumTime = function (time, totalTrips) {
  function checkk(arr, x) {
    let sum = 0;
    for (const no of arr) {
      sum += Math.floor(x / no);
    }
    return sum;
  }
  let left = 1;
  let right = 100000000000000;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let temp = checkk(time, mid);
    if (temp < totalTrips) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

console.log(minimumTime([1, 2, 3], 5)); // 3
console.log(minimumTime([2], 1)); // 2
console.log(minimumTime([5, 10, 10], 9)); // 25
console.log(minimumTime([1], 4)); // 4
console.log(minimumTime([3, 3, 8], 6)); // 9
