// 3370. Smallest Number With All Set Bits

const smallestNumber = function (n) {
  for (let i = n; i < Infinity; i++) {
    let num = i.toString(2);
    let nn = num.length;
    let count = 0;
    for (char of num) {
      if (char === "1") {
        count++;
      }
    }
    if (count === nn) return i;
  }
};

console.log(smallestNumber(5));
console.log(smallestNumber(10));
console.log(smallestNumber(3));
