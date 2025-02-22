// 1716. Calculate Money in Leetcode Bank

const totalMoney = function (n) {
  let result = [1];
  let mon = 1;
  let other = 1;

  for (let i = 2; i <= n; i++) {
    if ((i - 1) % 7 === 0) {
      mon++;
      result.push(mon);
      other = mon;
    } else {
      other++;
      result.push(other);
    }
  }
  return result.reduce((a, b) => a + b);
};

console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20));
console.log(totalMoney(26));
console.log(totalMoney(30));

function totalMoneyy(n) {
  let total = 0;
  let mondayAmount = 1;

  for (let day = 0; day < n; day++) {
    total += mondayAmount + (day % 7);
    if ((day + 1) % 7 === 0) mondayAmount++;
  }

  return total;
}
console.log(totalMoneyy(4));
console.log(totalMoneyy(10));
console.log(totalMoneyy(20));
console.log(totalMoneyy(26));
console.log(totalMoneyy(30));
