// 1636. Sort Array by Increasing Frequency

const frequencySort = function (nums) {
  let count = new Map();

  for (digit of nums) {
    count.set(digit, (count.get(digit) || 0) + 1);
  }

  return nums.sort((a, b) => {
    const freq_a = count.get(a);
    const freq_b = count.get(b);
    if (freq_a === freq_b) {
      return b - a;
    }
    return freq_a - freq_b;
  });
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
