// 1185. Day of the Week

const dayOfTheWeek = function (day, month, year) {
  const days_of_week = [
    "Sunday",

    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(year, month - 1, day);
  return days_of_week[date.getDay()];
};

console.log(dayOfTheWeek(31, 8, 2019));
console.log(dayOfTheWeek(18, 7, 1999));
console.log(dayOfTheWeek((day = 15), 8, 1993));
