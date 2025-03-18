// 3046. Split the Array

const isPossibleToSplit = function (nums) {
  let freqq = new Map();

  for (no of nums) {
    freqq.set(no, (freqq.get(no) || 0) + 1);
  }
  for (xx of nums) {
    if (freqq.get(xx) > 2) return false;
  }

  return true;
};

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));
console.log(isPossibleToSplit([1, 1, 1, 1]));
console.log(isPossibleToSplit([2, 3, 4, 5, 6, 4, 3, 3]));
