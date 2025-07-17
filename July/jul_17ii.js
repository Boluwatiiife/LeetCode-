// 1360. Number of Days Between Two Dates

const daysBetweenDates = function (date1, date2) {
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  function datee(date) {
    let arr = date.split("-").map((xx) => Number(xx));
    const months = [
      [31, 31],
      [59, 28],
      [90, 31],
      [120, 30],
      [151, 31],
      [181, 30],
      [212, 31],
      [243, 31],
      [273, 30],
      [304, 31],
      [334, 30],
      [365, 31],
    ];
    let days = 0;
    let use = arr[0];
    const years = Math.abs(1900 - use);
    let leap = 0;
    for (let i = 1900; i < use; i++) {
      if (isLeapYear(i)) leap++;
    }
    days += (years - leap) * 365;
    days += leap * 366;
    if (arr[1] === 1) days += arr[2];
    else if (arr[1] === 2) {
      days += 31;
      days += arr[2];
    } else if (arr[1] > 2) {
      let prev = months[arr[1] - 2];

      if (isLeapYear(arr[0])) {
        days += prev[0];
        days += 1;
        days += arr[2];
      } else {
        days += prev[0];
        days += arr[2];
      }
    }

    return days;
  }
  return Math.abs(datee(date1) - datee(date2));
};

const daysBetweenDatess = function (date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diff_in_Ms = Math.abs(d1 - d2);

  return diff_in_Ms / (1000 * 60 * 60 * 24);
};

console.log(daysBetweenDates("2019-06-29", "2019-06-30"));
console.log(daysBetweenDates("2020-01-15", "2019-12-31"));
console.log(daysBetweenDatess("2019-06-29", "2019-06-30"));
console.log(daysBetweenDatess("2020-01-15", "2019-12-31"));
