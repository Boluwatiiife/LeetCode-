// 1299. Replace Elements with Greatest Element on Right Side

const replaceElements = function (arr) {
  let max_right = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max_right;
    max_right = Math.max(max_right, temp);
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
