// 3438. Find Valid Pair of Adjacent Digits in String

const findValidPair = function (s) {
  let nums = s.split("").map(Number);
  let freqq = new Map();

  for (no of nums) {
    freqq.set(no, (freqq.get(no) || 0) + 1);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      let one = nums[i],
        two = nums[i + 1];
      if (freqq.get(one) === one && freqq.get(two) === two) {
        let xx = "";
        xx += one.toString();
        xx += two.toString();
        return xx;
      }
    }
  }

  return "";
};

console.log(findValidPair("2523533"));
console.log(findValidPair("221"));
console.log(findValidPair("22"));
