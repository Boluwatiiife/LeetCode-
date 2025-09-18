// 464. Can I Win

const canIWin = function (maxChoosableInteger, desiredTotal) {
  function checkWin(choices, target) {
    if (target <= Math.max(...choices)) return true;

    for (const temp of [...choices]) {
      choices.delete(temp);

      const two = checkWin(choices, target - temp);

      choices.add(temp);

      if (!two) return true;
    }
    return false;
  }

  const choices = new Set(
    Array.from({ length: maxChoosableInteger }, (_, i) => i + 1)
  );

  return checkWin(choices, desiredTotal);
};

console.log(canIWin(10, 11));
console.log(canIWin(10, 0));
console.log(canIWin(10, 1));
console.log(canIWin(5, 7));
