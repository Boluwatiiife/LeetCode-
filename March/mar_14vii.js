// 2806. Account Balance After Rounded Purchase

const accountBalanceAfterPurchase = function (purchaseAmount) {
  return 100 - Math.floor((purchaseAmount + 5) / 10) * 10;
};

console.log(accountBalanceAfterPurchase(9));
console.log(accountBalanceAfterPurchase(15));
console.log(accountBalanceAfterPurchase(10));
console.log(accountBalanceAfterPurchase(11));
