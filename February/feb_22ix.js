// 1758. Minimum Changes To Make Alternating Binary String

const minOperations = function (s) {
  let nums = s.split("");
  let aa = 0,
    bb = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== (i % 2 === 0 ? "0" : "1")) aa++;
    if (nums[i] !== (i % 2 === 0 ? "1" : "0")) bb++;
  }

  return Math.min(aa, bb);
};

console.log(minOperations("0100"));
console.log(minOperations("10"));
console.log(minOperations("1111"));
console.log(minOperations("11110"));
console.log(minOperations("10010100"));
