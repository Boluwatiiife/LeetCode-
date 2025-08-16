// 136. Single Number

const singleNumber = function (nums) {
  let freq = new Map();

  for (const no of nums) {
    freq.set(no, (freq.get(no) || 0) + 1);
  }
  for (const no of nums) {
    if (freq.get(no) === 1) return no;
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
