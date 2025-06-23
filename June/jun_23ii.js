// 3296. Minimum Number of Seconds to Make Mountain Height Zero

const minNumberOfSeconds = function (mountainHeight, workerTimes) {
  function maxHeightReduced(time, w) {
    const k = (2 * time) / w;
    const x = Math.floor((-1 + Math.sqrt(1 + 4 * k)) / 2);
    return x;
  }

  let left = 1,
    right = 1e20,
    ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let totalHeight = 0;
    for (let w of workerTimes) {
      totalHeight += maxHeightReduced(mid, w);
      if (totalHeight >= mountainHeight) break;
    }
    if (totalHeight >= mountainHeight) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

console.log(minNumberOfSeconds(4, [2, 1, 1]));
console.log(minNumberOfSeconds(10, [3, 2, 2, 4]));
console.log(minNumberOfSeconds(5, [1]));
console.log(minNumberOfSeconds(5, [1, 5]));
