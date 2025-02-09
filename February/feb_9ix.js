// 1304. Find N Unique Integers Sum up to Zero

const sumZero = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {}
  let num = n / 2;
  if (n % 2 !== 0) {
    arr.push(0);
  }
  for (let i = 1; i <= num; i++) {
    arr.push(i);
    arr.push(-i);
  }
  return arr;
  return arr.reduce((a, b) => a + b);
  return num;
};

console.group(sumZero(12));
console.group(sumZero(5));
console.group(sumZero(4));
console.group(sumZero(3));
console.group(sumZero(1));
