// 2591. Distribute Money to Maximum Children

const distMoney = function (money, children) {
  if (children > money) return -1;

  money -= children;
  let max_8 = Math.min(Math.floor(money / 7), children);

  if (max_8 === children) {
    return money === max_8 * 7 ? children : children - 1;
  }

  if (money - max_8 * 7 === 3 && children - max_8 === 1) {
    max_8--;
  }

  return max_8;
};

console.log(distMoney(20, 3));
console.log(distMoney(16, 2));
console.log(distMoney(43, 6));
console.log(distMoney(13, 3));
console.log(distMoney(17, 2));
console.log(distMoney(56, 2));
console.log(distMoney(2, 2));
console.log(distMoney(4, 6));
console.log(distMoney(15, 3));
console.log(distMoney(23, 2));
