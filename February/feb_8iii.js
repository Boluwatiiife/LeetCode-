// 1154. Day of the Year

const dayOfYear = function (date) {
  let months = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  let months_leap = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  //   return months.length;
  let arr = date.split("-");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  if (arr[0] !== 1900 && arr[0] % 4 === 0) {
    months[1] = months[1] + 1;
  }

  let dayss = [arr[1], arr[2]];
  //   return dayss;

  if (arr[1] === 1) {
    return arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 2) {
    return months_leap[0] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 3) {
    return months_leap[1] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 4) {
    return months_leap[2] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 5) {
    return months_leap[3] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 6) {
    return months_leap[4] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 7) {
    return months_leap[5] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 8) {
    return months_leap[6] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 9) {
    return months_leap[7] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 10) {
    return months_leap[8] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 11) {
    return months_leap[9] + arr[2];
  } else if (arr[0] !== 1900 && arr[0] % 4 === 0 && arr[1] === 12) {
    return months_leap[10] + arr[2];
  } else if (arr[1] === 2) {
    return months[0] + arr[2];
  } else if (arr[1] === 3) {
    return months[1] + arr[2];
  } else if (arr[1] === 4) {
    return months[2] + arr[2];
  } else if (arr[1] === 5) {
    return months[3] + arr[2];
  } else if (arr[1] === 6) {
    return months[4] + arr[2];
  } else if (arr[1] === 7) {
    return months[5] + arr[2];
  } else if (arr[1] === 8) {
    return months[6] + arr[2];
  } else if (arr[1] === 9) {
    return months[7] + arr[2];
  } else if (arr[1] === 10) {
    return months[8] + arr[2];
  } else if (arr[1] === 11) {
    return months[9] + arr[2];
  } else if (arr[1] === 12) {
    return months[10] + arr[2];
  }
};

console.log(dayOfYear("2019-01-09"));
console.log(dayOfYear("2019-02-10"));
console.log(dayOfYear("1908-02-10"));
console.log(dayOfYear("2024-02-10"));
console.log(dayOfYear("2023-02-10"));
console.log(dayOfYear("2025-02-8"));

// optimized solution

const Year_to_days = function (date) {
  let [year, month, day] = date.split("-").map(Number);

  const daysBeforeMontth = [
    0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
  ];

  let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return daysBeforeMontth[month - 1] + day + (isLeap && month > 2 ? 1 : 0);
};

console.log(Year_to_days("2019-01-09"));
console.log(Year_to_days("2019-02-10"));
console.log(Year_to_days("1908-02-10"));
console.log(Year_to_days("2024-02-10"));
console.log(Year_to_days("2023-02-10"));
console.log(Year_to_days("2025-02-8"));
console.log(Year_to_days("2025-06-27"));
