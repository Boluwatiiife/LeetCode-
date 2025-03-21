// 3232. Find if Digit Game Can Be Won

const canAliceWin = function (nums) {
  let single = 0,
    double = 0;

  for (no of nums) {
    let char = no.toString();
    if (char.length === 1) {
      single += no;
    }
    if (char.length === 2) {
      double += no;
    }
  }
  if (single > double || double > single) return true;
  return false;
};

console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));
