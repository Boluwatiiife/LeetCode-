// 3222. Find the Winning Player in Coin Game

const winningPlayer = function (x, y) {
  let seven = x * 75,
    ten = y * 10;

  let count = 0;

  while (seven >= 75 && ten >= 40) {
    seven -= 75;
    ten -= 40;
    count++;
  }

  return count % 2 !== 0 ? "Alice" : "Bob";
};

console.log(winningPlayer(2, 7));
console.log(winningPlayer(4, 11));
