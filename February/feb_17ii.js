// 1507. Reformat Date

const reformatDate = function (date) {
  date = date.split(" ").reverse();
  date[2] = date[2].split("");
  date[2].pop();
  date[2].pop();
  date[2] = date[2].join("");
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let i = 0; i < month.length; i++) {
    if (date[1] === month[i]) {
      date[1] = (i + 1).toString();
    }
  }
  if (date[1].length < 2) {
    date[1] = "0" + date[1];
  }
  if (date[2].length < 2) {
    date[2] = "0" + date[2];
  }
  //   return date;
  return date.join("-");
};

console.log(reformatDate("20th Oct 2052"));
console.log(reformatDate("6th Jun 1933"));
console.log(reformatDate("26th May 1960"));
console.log(reformatDate("10th Jan 2082"));
