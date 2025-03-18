// 3079. Find the Sum of Encrypted Integers

const sumOfEncryptedInt = function (nums) {
  let sum = 0;

  for (no of nums) {
    let arr = no.toString().split("").map(Number);
    let max = Math.max(...arr);
    let numm = "";
    for (let i = 0; i < arr.length; i++) {
      arr[i] = max;
      numm += arr[i].toString();
    }
    sum += Number(numm);
  }
  return sum;
};

console.log(sumOfEncryptedInt([1, 2, 3]));
console.log(sumOfEncryptedInt([10, 21, 31]));
