// 1486. XOR Operation in an Array

const xorOperation = function (n, start) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i);
  }
  let xorr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    xorr = xorr ^ arr[i];
  }
  return xorr;
};

console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));
