// 347. Top K Frequent Elements

const topKFrequent = function (nums, k) {
  let freqq = new Map();
  for (no of nums) {
    freqq.set(no, (freqq.get(no) || 0) + 1);
  }
  let arr = [];
  for (no of nums) {
    arr.push([no, freqq.get(no)]);
  }
  arr = arr.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    arr[i] = temp[0];
  }
  arr = [...new Set(arr)];
  return arr.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 1, 2, 3, 6, 6, 6, 6, 7, 8, 8, 8], 3));
