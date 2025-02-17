// 1502. Can Make Arithmetic Progression From Sequence

const canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let diff = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
console.log(canMakeArithmeticProgression([1, 5, 6, 4, 3]));
