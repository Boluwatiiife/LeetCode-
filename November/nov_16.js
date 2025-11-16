// 2094. Finding 3-Digit Even Numbers

const findEvenNumbers = function (digits) {
  let temp = new Set();

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (i === j || j === k || i === k) continue;

        let num = digits[i] * 100 + digits[j] * 10 + digits[k];
        if (digits[i] !== 0 && num % 2 === 0) {
          temp.add(num);
        }
      }
    }
  }
  return [...temp].sort((a, b) => a - b);
};

console.log(findEvenNumbers([2, 1, 3, 0]));
console.log(findEvenNumbers([2, 2, 8, 8, 2]));
console.log(findEvenNumbers([3, 7, 5]));
