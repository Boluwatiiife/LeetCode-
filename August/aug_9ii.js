// 3633. Earliest Finish Time for Land and Water Rides I

const earliestFinishTime = function (
  landStartTime,
  landDuration,
  waterStartTime,
  waterDuration
) {
  let land = [];
  let water = [];

  for (let i = 0; i < landDuration.length; i++) {
    land.push(landDuration[i] + landStartTime[i]);
  }
  for (let i = 0; i < waterDuration.length; i++) {
    water.push(waterDuration[i] + waterStartTime[i]);
  }
  let ans = Infinity;

  for (const no of land) {
    for (let i = 0; i < waterStartTime.length; i++) {
      if (no < waterStartTime[i]) {
        ans = Math.min(waterStartTime[i] - no + no + waterDuration[i], ans);
      } else {
        ans = Math.min(ans, no + waterDuration[i]);
      }
    }
  }
  for (const no of water) {
    for (let i = 0; i < landStartTime.length; i++) {
      if (no < landStartTime[i]) {
        ans = Math.min(landStartTime[i] - no + no + landDuration[i], ans);
      } else {
        ans = Math.min(ans, no + landDuration[i]);
      }
    }
  }

  return ans;
};

console.log(earliestFinishTime([2, 8], [4, 1], [6], [3]));
console.log(earliestFinishTime([5], [3], [1], [10]));
console.log(earliestFinishTime([99], [59], [99, 54], [85, 20]));
