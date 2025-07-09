// 3439. Reschedule Meetings for Maximum Free Time I

const maxFreeTime = function (eventTime, k, startTime, endTime) {
  let spaces = [];
  let use = 0;
  for (let i = 0; i < startTime.length; i++) {
    spaces.push(startTime[i] - use);
    use = endTime[i];
  }
  spaces.push(eventTime - endTime[endTime.length - 1]);

  let maxx = 0;
  let count = 0;
  let sum = 0;
  let left = 0;

  for (let i = 0; i < spaces.length; i++) {
    sum += spaces[i];
    count++;
    if (count === k + 1) {
      maxx = Math.max(maxx, sum);
      sum -= spaces[left];
      left++;
      count--;
    }
  }

  return maxx;
};

console.log(maxFreeTime(5, 1, [1, 3], [2, 5]));
console.log(maxFreeTime(10, 1, [0, 2, 9], [1, 4, 10]));
console.log(maxFreeTime(5, 2, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(maxFreeTime(21, 1, [7, 10, 16], [10, 14, 18])); // 7
console.log(maxFreeTime(21, 2, [18, 20], [20, 21])); // 18
console.log(maxFreeTime(17, 3, [7, 12, 15], [12, 14, 17])); // 8
