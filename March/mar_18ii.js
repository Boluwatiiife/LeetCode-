// 3005. Count Elements With Maximum Frequency
const maxFrequencyElements = function (nums) {
  let count = new Map();

  for (no of nums) {
    count.set(no, (count.get(no) || 0) + 1);
  }
  let maxx = Math.max(...[...count.values()]);
  let anss = 0;
  for (no of nums) {
    if (count.get(no) === maxx) {
      anss++;
    }
  }

  return anss;
};

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
