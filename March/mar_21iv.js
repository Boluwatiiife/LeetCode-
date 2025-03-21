// 3270. Find the Key of the Numbers

const generateKey = function (num1, num2, num3) {
  let arr = [num1, num2, num3];

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].toString();
    if (temp.length !== 4) {
      let xx = 4 - temp.length;
      for (let j = 0; j < xx; j++) {
        temp = "0" + temp;
      }
      arr[i] = temp;
    }
    arr[i] = temp;
  }

  let one = Math.min(Number(arr[0][0]), Number(arr[1][0]), Number(arr[2][0]));
  let two = Math.min(Number(arr[0][1]), Number(arr[1][1]), Number(arr[2][1]));
  let three = Math.min(Number(arr[0][2]), Number(arr[1][2]), Number(arr[2][2]));
  let four = Math.min(Number(arr[0][3]), Number(arr[1][3]), Number(arr[2][3]));

  let result =
    one.toString() + two.toString() + three.toString() + four.toString();

  return Number(result);
};

console.log(generateKey(1, 10, 1000));
console.log(generateKey(987, 879, 798));
console.log(generateKey(1, 2, 3));
