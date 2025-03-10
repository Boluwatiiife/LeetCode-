// 2520. Count the Digits That Divide a Number

const countDigits = function (num) {
  let str = num.toString();
  let arr = [];
  for (no of str) {
    arr.push(Number(no));
  }

  let count = 0;
  for (no of arr) {
    if (num % no === 0) {
      count++;
    }
  }

  return count;
};

console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));
