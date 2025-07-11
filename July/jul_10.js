// 3440. Reschedule Meetings for Maximum Free Time II

const maxFreeTime = function (eventTime, startTime, endTime) {
  let spaces = [];
  let time = [];
  let use = 0;
  let maxSpace = -Infinity;
  for (let i = 0; i < startTime.length; i++) {
    time.push(endTime[i] - startTime[i]);
    const temp = startTime[i] - use;
    spaces.push(temp);
    maxSpace = Math.max(maxSpace, temp);
    use = endTime[i];
  }
  spaces.push(eventTime - endTime[endTime.length - 1]);
  maxSpace = Math.max(maxSpace, eventTime - endTime[endTime.length - 1]);

  let ans = 0;

  for (let i = 0; i < spaces.length - 1; i++) {
    const one = spaces[i];
    const two = spaces[i + 1];
    let sum = one + two;

    spaces[i] = 0;
    spaces[i + 1] = 0;
    const great = spaces.some((num) => num >= time[i]);
    if (great) {
      sum += time[i];
    }
    ans = Math.max(ans, sum);
    spaces[i] = one;
    spaces[i + 1] = two;
  }

  return ans;
};

console.log(maxFreeTime(5, [1, 3], [2, 5]));
console.log(maxFreeTime(10, [0, 7, 9], [1, 8, 10]));
console.log(maxFreeTime(10, [0, 3, 7, 9], [1, 4, 8, 10]));
console.log(maxFreeTime(5, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(maxFreeTime(41, [17, 24], [19, 25])); // 24
console.log(maxFreeTime(25, [18, 22, 24], [22, 23, 25])); // 18
console.log(maxFreeTime(10, [0, 3, 7, 9], [1, 4, 8, 10])); // 6
console.log(maxFreeTime(52, [28, 38], [38, 41])); // 38
console.log(maxFreeTime(178, [3, 20, 98, 118], [17, 39, 111, 141])); // 81
console.log(maxFreeTime(82, [15, 44, 45, 47, 75], [40, 45, 47, 60, 82])); // 28
