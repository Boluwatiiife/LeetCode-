// 860. Lemonade Change

const lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (const temp of bills) {
    if (temp === 5) five++;
    else if (temp === 10) {
      if (five === 0) return false;
      five--;
      ten++;
    } else {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) five -= 3;
      else return false;
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
