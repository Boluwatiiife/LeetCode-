// 3289. The Two Sneaky Numbers of Digitville

const getSneakyNumbers = function (nums) {
  let freqq = new Map();

  for (no of nums) {
    freqq.set(no, (freqq.get(no) || 0) + 1);
  }
  let arr = [];
  for (no of nums) {
    if (freqq.get(no) > 1) {
      arr.push(no);
    }
  }
  return [...new Set(arr)];
};

console.log(getSneakyNumbers([0, 1, 1, 0]));
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
