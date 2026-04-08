// 3852. Smallest Pair With Different Frequencies

const minDistinctFreqPair = function (nums) {
  const n = nums.length;
  let ans = [-1, -1];

  let freq = new Map();
  for (const no of nums) freq.set(no, (freq.get(no) || 0) + 1);
  const arr = [...freq.keys()];
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    if (freq.get(arr[i]) !== freq.get(arr[0])) {
      ans = [arr[0], arr[i]];
      return ans;
    }
  }

  return ans;
  return arr;

  return freq;
};

console.log(minDistinctFreqPair([1, 1, 2, 2, 3, 4]));
console.log(minDistinctFreqPair([1, 5]));
console.log(minDistinctFreqPair([7]));
console.log(minDistinctFreqPair([5, 5, 4]));
