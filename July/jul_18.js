// 1413. Minimum Value to Get Positive Step by Step Sum

const minStartValue = function (nums) {
  function checkk(x) {
    let ans = x;
    for (const temp of nums) {
      ans = ans + temp;
      if (ans < 1) return false;
    }
    return true;
  }

  let use = 1;
  while (checkk(use) === false) use++;

  return use;
};

console.log(minStartValue([-3, 2, -3, 4, 2]));
console.log(minStartValue([1, 2]));
console.log(minStartValue([1, -2, -3]));
