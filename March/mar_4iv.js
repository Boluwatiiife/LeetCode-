// 2264. Largest 3-Same-Digit Number in String

const largestGoodInteger = function (num) {
  let arr = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] === num[i] && num[i] === num[i + 2]) {
      arr.push(num[i] + num[i + 1] + num[i + 2]);
    }
  }
  arr = arr.sort((a, b) => Number(b) - Number(a));
  if (arr.length === 0) return "";
  return arr[0];
};

console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("2300019"));
console.log(largestGoodInteger("42352338"));
console.log(largestGoodInteger("222"));
