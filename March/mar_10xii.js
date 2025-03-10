// 2566. Maximum Difference by Remapping a Digit

const minMaxDifference = function (num) {
  let arr = num.toString().split("");

  let nine = "";
  let zero = "";
  for (no of arr) {
    if (no !== "9") {
      nine = no;
      break;
    }
  }
  for (no of arr) {
    if (no !== "0") {
      zero = no;
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nine) {
      arr[i] = "9";
    }
  }
  let max = Number(arr.join(""));
  arr = num.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === zero) {
      arr[i] = "0";
    }
  }
  let min = Number(arr.join(""));

  return max - min;
};

console.log(minMaxDifference(11891));
console.log(minMaxDifference(90));
console.log(minMaxDifference(653435));
