// 2595. Number of Even and Odd Bits

const evenOddBit = function (n) {
  let nums = n.toString(2).split("").map(Number);
  let arr = nums.reverse();

  let resultt = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (i % 2 === 0) {
        resultt[0]++;
      } else {
        resultt[1]++;
      }
    }
  }
  return resultt;
};

console.log(evenOddBit(50));
console.log(evenOddBit(2));
