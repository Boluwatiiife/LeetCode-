// 1648. Sell Diminishing-Valued Colored Balls

const maxProfit = function (inventory, orders) {
  inventory = [0, ...inventory].sort((a, b) => a - b);

  let score = 0n;
  let n = inventory.length;

  for (let i = n - 1; orders > 0; i--) {
    if (inventory[i] === inventory[i - 1]) continue;

    const diff = Math.min(
      inventory[i] - inventory[i - 1],
      Math.floor(orders / (n - i))
    );
    const balls = diff * (n - i);

    orders -= balls;
    score += (BigInt(balls) * BigInt(2 * inventory[i] - diff + 1)) / 2n;
    if (diff < inventory[i] - inventory[i - 1]) {
      (score += BigInt(inventory[i] - diff) * BigInt(orders)), (orders = 0);
    }
  }

  return Number(score % 1000000007n);
};

console.log(maxProfit([2, 5], 4));
console.log(maxProfit([3, 5], 6));
console.log(maxProfit([1000000000], 1000000000));
console.log(maxProfit([773160767], 252264991));
