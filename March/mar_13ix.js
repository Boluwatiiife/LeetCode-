// 2733. Neither Minimum nor Maximum

const findNonMinOrMax = function (nums) {
  for (no of nums) {
    if (no !== Math.max(...nums) && no !== Math.min(...nums)) {
      return no;
    }
  }
  return -1;
};

console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
