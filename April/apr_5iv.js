// 260. Single Number III

const singleNumber = function (nums) {
  let freqq = new Map();
  for (no of nums) {
    freqq.set(no, (freqq.get(no) || 0) + 1);
  }
  return nums.filter((xx) => freqq.get(xx) === 1);
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
console.log(singleNumber([0, 1]));
