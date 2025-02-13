// 1342. Number of Steps to Reduce a Number to Zero

const numberOfSteps = function (num) {
  let anss = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      anss++;
    } else {
      num = num - 1;
      anss++;
    }
  }
  return anss;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
console.log(numberOfSteps(45348598435934));
