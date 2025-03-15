// 2843. Count Symmetric Integers

const countSymmetricIntegers = function (low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    let arr = i.toString().split("").map(Number);
    if (arr.length > 1) {
      let n = arr.length / 2;
      let temp = [];
      for (let j = arr.length - 1; j >= 0; j--) {
        temp.push(arr[j]);
        arr.splice(j, 1);
        if (j === n) break;
      }
      let xxx = arr.reduce((a, b) => a + b, 0);
      let yyy = temp.reduce((a, b) => a + b, 0);
      if (xxx === yyy) {
        count++;
      }
    }
  }
  return count;
};

console.log(countSymmetricIntegers(1, 100));
console.log(countSymmetricIntegers(1200, 1230));
