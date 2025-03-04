// 2269. Find the K-Beauty of a Number

const divisorSubstrings = function (num, k) {
  let nums = num.toString().split("");
  let temp = "";
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < k + i; j++) {
      temp = temp + nums[j];
    }
    if (num % Number(temp) === 0) {
      count++;
    }
    temp = "";
  }

  return count;
};

console.log(divisorSubstrings(240, 2));
console.log(divisorSubstrings(430043, 2));
console.log(divisorSubstrings(123456789, 3));
console.log(divisorSubstrings(123456789, 4));
