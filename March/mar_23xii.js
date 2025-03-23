// 3471. Find the Largest Almost Missing Integer

const largestInteger = function (nums, k) {
  let arr = new Map();
  let countt = 0;

  for (let i = 0; i < nums.length - k + 1; i++) {
    let temp = nums.slice(i, k + i);
    countt++;
    for (no of temp) {
      arr.set(no, (arr.get(no) || 0) + 1);
    }
  }
  let maxx = -1;
  for (no of nums) {
    if (arr.get(no) === 1) {
      maxx = Math.max(maxx, no);
    }
  }
  return countt > 1 ? maxx : Math.max(...nums);
};

console.log(largestInteger([3, 9, 2, 1, 7], 3));
console.log(largestInteger([3, 9, 7, 2, 1, 7], 4));
console.log(largestInteger([0, 0], 1));
console.log(largestInteger([0, 0], 2));
console.log(largestInteger([0, 50], 2));
