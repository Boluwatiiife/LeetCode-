// 1450. Number of Students Doing Homework at a Given Time

const busyStudent = function (startTime, endTime, queryTime) {
  let arr = (startTime.length + endTime.length) / 2;
  //   return arr;
  let resultt = 0;
  for (let i = 0; i < arr; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      resultt++;
    }
  }
  return resultt;
};

console.log(busyStudent([1, 2, 3], [3, 4, 7], 4));
console.log(busyStudent([4], [4], 4));
