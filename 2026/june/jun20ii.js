// 3940. Limit Occurrences in Sorted Array

const limitOccurrences = function (nums, k) {
  let freq = new Map();
  for (no of nums) freq.set(no, (freq.get(no) || 0) + 1);
  const arr = [...freq.keys()];
  let ans = [];

  for (no of arr) {
    if (freq.get(no) > k) for (let i = 0; i < k; i++) ans.push(no);
    else {
      for (let i = 0; i < freq.get(no); i++) ans.push(no);
    }
  }

  return ans;
};

console.log(limitOccurrences([1, 1, 1, 2, 2, 3], 2));
console.log(limitOccurrences([1, 2, 3], 1));
console.log(limitOccurrences([18], 1));
