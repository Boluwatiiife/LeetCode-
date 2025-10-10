// 823. Binary Trees With Factors

const stoneGame = function (piles) {
  let alice = 0,
    bob = 0;
  let left = 0,
    right = piles.length - 1;

  let turn = 0;
  while (left < right) {
    const one = piles[left];
    const two = piles[right];
    if (one !== two) {
      if (one > two) {
        alice += one;
        bob += two;
        left++;
      } else {
        alice += two;
        bob += one;
        right--;
      }
      turn++;
    } else if (one === two) {
      const ll = left;
      const rr = right;
      while (piles[left] === piles[right]) {
        left++;
        right--;
      }
      if (piles[left] > piles[right]) {
        alice += two;
        bob += one;
        right = rr;
        right--;
      } else {
        alice += one;
        bob += two;
        left = ll;
        left++;
      }
      turn++;
    }
  }

  return alice > bob;
};

console.log(stoneGame([5, 3, 4, 5]));
console.log(stoneGame([3, 7, 2, 3]));
