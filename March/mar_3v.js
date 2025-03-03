// 2224. Minimum Number of Operations to Convert Time

const convertTime = function (current, correct) {
  current = current.split(":");
  correct = correct.split(":");

  let num =
    Number(correct[0]) * 60 +
    Number(correct[1]) -
    (Number(current[0]) * 60 + Number(current[1]));

  let count = 0;
  while (num > 0) {
    if (num >= 60) {
      let xx = Math.floor(num / 60);
      count += xx;
      num = num - 60 * xx;
    } else if (num >= 15) {
      let xx = Math.floor(num / 15);
      // return xx;
      count += xx;
      num = num - 15 * xx;
    } else if (num >= 5) {
      let xx = Math.floor(num / 5);
      count += xx;
      num = num - 5 * xx;
    } else if (num >= 1) {
      let xx = Math.floor(num / 1);
      count += xx;
      num = num - 1 * xx;
    }
  }
  return count;
};

console.log(convertTime("02:30", "04:35"));
console.log(convertTime("11:00", "11:01"));
console.log(convertTime("11:00", "11:37"));
console.log(convertTime("09:41", "10:34"));
console.log(convertTime("13:55", "15:13"));
