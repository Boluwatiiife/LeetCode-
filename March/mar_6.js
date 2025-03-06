// 2283. Check if Number Has Equal Digit Count and Digit Value

const digitCount = function (num) {
  let count_map = new Array(10).fill(0);

  for (char of num) {
    count_map[char]++;
  }

  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) !== count_map[i]) {
      return false;
    }
  }
  return true;
};

console.log(digitCount("1210"));
console.log(digitCount("030"));
console.log(digitCount("1"));
