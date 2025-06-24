// 3346. Maximum Frequency of an Element After Performing Operations I

const maxFrequency = function (nums, k, numOperations) {
  const size = Math.max(...nums) + k + 2;
  const freq = new Array(size).fill(0);
  const pre = new Array(size).fill(0);
  nums.forEach((element) => {
    freq[element]++;
  });

  pre[0] = freq[0];
  for (let i = 1; i < size; i++) {
    pre[i] = pre[i - 1] + freq[i];
  }

  let ans = 0;
  for (let x = 0; x < size; x++) {
    const left = Math.max(0, x - k);
    const right = Math.min(size - 1, x + k);
    const totalInRange = pre[right] - (left > 0 ? pre[left - 1] : 0);
    ans = Math.max(
      ans,
      freq[x] + Math.min(numOperations, totalInRange - freq[x])
    );
  }
  return ans;
};

console.log(maxFrequency([1, 4, 5], 1, 2));
console.log(maxFrequency([5, 11, 20, 20], 5, 1));
console.log(maxFrequency([2, 70, 73], 39, 2));
