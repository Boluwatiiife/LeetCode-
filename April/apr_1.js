// 137. Single Number II

const singleNumber = function (nums) {
  const freqq = new Map();

  for (no of nums) {
    freqq.set(no, (freqq.get(no) || 0) + 1);
  }
  for (no of nums) {
    if (freqq.get(no) === 1) return no;
  }
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 4]));

// for (const no of nums) {
//   if (nums.indexOf(no) === nums.lastIndexOf(no)) {
//     return no;
//   }
// }
