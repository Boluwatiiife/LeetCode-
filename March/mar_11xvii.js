// 2660. Determine the Winner of a Bowling Game

const isWinner = function (player1, player2) {
  let n = player1.length;
  let one = 0,
    two = 0;
  for (let i = 0; i < n; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      one += player1[i] * 2;
    } else {
      one += player1[i];
    }
    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      two += player2[i] * 2;
    } else {
      two += player2[i];
    }
  }
  if (one === two) return 0;
  return one > two ? 1 : 2;
};

console.log(isWinner([5, 10, 3, 2], [6, 5, 7, 3]));
console.log(isWinner([3, 5, 7, 6], [8, 10, 10, 2]));
console.log(isWinner([2, 3], [4, 1]));
console.log(isWinner([1, 1, 1, 10, 10, 10, 10], [10, 10, 10, 10, 1, 1, 1]));
