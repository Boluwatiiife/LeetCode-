// 551.  Student Attendance Record I

const checkRecord = function (s) {
  const stringg = s.split("");
  //   return stringg;
  let absent = [];
  let max_count = 0;
  let current_count = 0;
  for (let i = 0; i < stringg.length; i++) {
    if (stringg[i] === "A") {
      absent.push(stringg[i]);
    }
    if (stringg[i] === "L") {
      current_count++;
      max_count = Math.max(max_count, current_count);
    } else {
      current_count = 0;
    }
  }
  if (absent.length > 1) return false;
  if (max_count > 2) return false;
  return true;
};

console.log(checkRecord("PPALLP"));
console.log(checkRecord("PPALLL"));
console.log(checkRecord("AA"));
console.log(checkRecord("APPPPPPLPLPLPLPLPLPLPPLL"));
