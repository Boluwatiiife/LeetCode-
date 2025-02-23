// 1796. Second Largest Digit in a String

const secondHighest = function (s) {
  let nums = new Set();

  for (char of s) {
    if (!isNaN(char)) {
      nums.add(Number(char));
    }
  }

  nums = [...nums].sort((a, b) => b - a);

  return nums.length > 1 ? nums[1] : -1;
};

console.log(secondHighest("dfa12321afd"));
console.log(secondHighest("abc1111"));
console.log(secondHighest("abc"));
console.log(secondHighest("ck077"));
