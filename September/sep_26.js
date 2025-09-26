// 1313. Decompress Run-Length Encoded List

const decompressRLElist = function (nums) {
  const n = nums.length;
  let ans = [];

  for (let i = 0; i < n; i += 2) {
    const [freq, val] = [nums[i], nums[i + 1]];
    for (let j = 0; j < freq; j++) ans.push(val);
  }

  return ans;
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([1, 1, 2, 3]));
console.log(decompressRLElist([1, 1, 2, 3, 5, 4, 3, 3]));
console.log(decompressRLElist([1, 3, 3, 2]));
