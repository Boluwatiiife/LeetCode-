// 986. Number of Elapsed Seconds Between Two Times

const secondsBetweenTimes = function (startTime, endTime) {
  let start = startTime.split(":").map((xx) => Number(xx));
  let end = endTime.split(":").map((xx) => Number(xx));
  const hour = end[0] - start[0];

  let ans = hour * 60 * 60 + end[1] * 60 + end[2];
  ans -= start[1] * 60 + start[2];

  return ans;
};

console.log(secondsBetweenTimes("01:00:00", "01:00:25"));
console.log(secondsBetweenTimes("12:34:56", "13:00:00"));
console.log(secondsBetweenTimes("12:34:56", "13:00:59"));
console.log(secondsBetweenTimes("10:35:54", "10:43:34"));
console.log(secondsBetweenTimes("09:00:29", "15:27:32"));
console.log(secondsBetweenTimes("14:57:44", "18:19:52"));
console.log(secondsBetweenTimes("08:34:50", "19:57:36"));
