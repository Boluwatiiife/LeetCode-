// 475. Heaters

const findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  let ans = 0;

  for (const house of houses) {
    let left = 0;
    let right = heaters.length - 1;
    let closest = Infinity;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const dist = Math.abs(heaters[mid] - house);
      closest = Math.min(closest, dist);
      if (heaters[mid] > house) right = mid - 1;
      else left = mid + 1;
    }
    ans = Math.max(ans, closest);
  }
  return ans;
};

console.log(findRadius([1, 2, 3], [2]));
console.log(findRadius([1, 2, 3, 4], [1, 4]));
console.log(findRadius([1, 5], [2]));
