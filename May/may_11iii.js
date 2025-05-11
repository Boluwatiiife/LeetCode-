// 1550. Three Consecutive Odds

const threeConsecutiveOdds = function (arr) {
  let check = [];

  for (let i = 0; i < arr.length; i++) {
    check.push(arr[i]);
    if (check.length === 3) {
      if (check.every((no) => no % 2 !== 0)) return true;
      check.shift();
    }
  }
  return false;
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
