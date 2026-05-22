// 3931. Check Adjacent Digit Differences

const isAdjacentDiffAtMostTwo = function (s) {
  for (let i = 1; i < s.length; i++) {
    let one = Number(s[i - 1]),
      two = Number(s[i]);
    if (Math.abs(one - two) > 2) return false;
  }

  return true;
};

console.log(isAdjacentDiffAtMostTwo("132"));
console.log(isAdjacentDiffAtMostTwo("129"));
