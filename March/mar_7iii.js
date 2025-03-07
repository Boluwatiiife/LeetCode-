// 2347. Best Poker Hand

const bestHand = function (ranks, suits) {
  let rank_count = new Map();
  let suits_count = new Map();

  for (num of ranks) {
    rank_count.set(num, (rank_count.get(num) || 0) + 1);
  }
  for (char of suits) {
    suits_count.set(char, (suits_count.get(char) || 0) + 1);
  }

  let rankk = [...rank_count.values()];
  let suitt = [...suits_count.values()];
  let temp = [Math.max(...rankk), Math.max(...suitt)];

  if (temp[1] === 5) return "Flush";
  if (temp[0] >= 3) return "Three of a Kind";
  if (temp[0] === 2) return "Pair";
  return "High Card";
};

console.log(bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"]));
console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]));
console.log(bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"]));
console.log(bestHand([13, 12, 3, 4, 7], ["a", "d", "c", "b", "c"]));
