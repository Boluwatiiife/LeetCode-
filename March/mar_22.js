// 3360. Stone Removal Game

const canAliceWin = function (n) {
  let num = n;
  let ten = 10;
  let sum = 0;
  while (true) {
    if (ten > num) break;
    num -= ten;
    ten--;
    sum++;
  }
  return sum % 2 !== 0 ? true : false;
};

console.log(canAliceWin(12));
console.log(canAliceWin(1));
console.log(canAliceWin(27));
console.log(canAliceWin(25));
