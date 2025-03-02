// 2160. Minimum Sum of Four Digit Number After Splitting Digits

const minimumSum = function (num) {
  let arr = num
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => a - b);

  let temp = arr.map(String);
  return Number(temp[0] + temp[2]) + Number(temp[1] + temp[3]);
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));
