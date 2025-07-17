const daysBetweenDatess = function (date1, date2) {
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  function count_days(date) {
    const [y, m, d] = date.split("-").map(Number);
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;

    for (let i = 1971; i < y; i++) {
      days += isLeapYear(i) ? 366 : 365;
    }

    for (let i = 0; i < m - 1; i++) {
      days += months[i];
    }
    if (isLeapYear(y) && m > 2) days += 1;
    days += d;

    return days;
  }
  return Math.abs(count_days(date1) - count_days(date2));
};

console.log(daysBetweenDatess("2019-06-29", "2019-06-30"));
console.log(daysBetweenDatess("2020-01-15", "2019-12-31"));
