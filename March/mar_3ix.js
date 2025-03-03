// 2243. Calculate Digit Sum of a String

const digitSum = function (s, k) {
  if (k >= s.length) return s;
  let temp = s;
  let arr = [];
  let xxx = true;

  while (xxx) {
    for (let i = 0; i < temp.length; i += k) {
      arr.push(temp.substring(i, i + k));
    }
    temp = "";
    for (let i = 0; i < arr.length; i++) {
      let nums = arr[i].split("").map(Number);
      let char = nums.reduce((a, b) => a + b);
      temp += char.toString();
    }
    arr = [];
    if (temp.length <= k) return temp;
  }
};

console.log(digitSum("11111222223", 3));
console.log(digitSum("00000000", 3));
