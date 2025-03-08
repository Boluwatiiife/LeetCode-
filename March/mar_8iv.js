// 2404. Most Frequent Even Element

const mostFrequentEven = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let even = new Map();

  for (no of nums) {
    if (no % 2 === 0) {
      even.set(no, (even.get(no) || 0) + 1);
    }
  }
  let values = [...even.values()];
  let maxx = Math.max(...values);
  for (no of nums) {
    if (even.get(no) === maxx) return no;
  }
  return -1;
};

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4]));
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]));
