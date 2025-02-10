// 1323. Maximum 69 Number

const maximum69Number = function (num) {
  let resultt = [];
  resultt.push(num);
  let arr = num.toString().split("").map(Number);
  //   return arr;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if (arr[i] === 9) {
      arr[i] = 6;
    } else if (arr[i] === 6) {
      arr[i] = 9;
    }
    let digit = parseInt(arr.join(""));
    resultt.push(digit);
    arr[i] = temp;
  }
  return Math.max(...resultt);
};

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
console.log(maximum69Number(6666));
