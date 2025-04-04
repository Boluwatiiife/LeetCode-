// 287. Find the Duplicate Number

const findDuplicate = function (nums) {
  const freqq = new Map();
  for (no of nums) {
    freqq.set(no, (freqq.get(no) || 0) + 1);
    if (freqq.get(no) > 1) return no;
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([4, 3, 3, 3, 3]));
