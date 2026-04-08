// 2591. Distribute Money to Maximum Children

const distMoney = function (money, children) {
  let inii = money;
  //   return inii;
  money = money - children;
  //   return money;
  if (money < 0) return -1;
  if (inii / 8 === children) return children;
  let arr = [];
  for (let i = 0; i < children; i++) {
    arr.push(1);
  }
  let sum = children;
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 7;
    sum += 8;
    if (money - sum < 8) break;
  }
  //   return arr;
  let reducee = arr.reduce((a, b) => a + b);
  return [inii, reducee];
  if (reducee === money && arr[arr.length - 1] !== 0) return children;
  //   return
  let diff = money - reducee;
  //   return diff;
  if (diff === 0) return 0;
  if (diff === 4) return arr.length - 2;
  if (reducee < money) return arr.length - 1;
  if (money === children) return 0;
  return -1;
};

console.log(distMoney(20, 3));
console.log(distMoney(16, 2));
console.log(distMoney(43, 4));
console.log(distMoney(8, 2));
console.log(distMoney(2, 4));
console.log(distMoney(2, 2));
console.log(distMoney(8, 8));
console.log(distMoney(9, 3));
