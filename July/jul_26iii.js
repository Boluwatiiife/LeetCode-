// 1025. Divisor Game

const divisorGame = function (n) {
  let count = 0;
  while (n > 1) {
    n -= 1;
    count++;
  }
  return count % 2 !== 0;
};

console.log(divisorGame(2));
console.log(divisorGame(3));
console.log(divisorGame(7));
