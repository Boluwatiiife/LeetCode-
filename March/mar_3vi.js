// 231. Largest Number After Digit Swaps by Parity

const largestInteger = function (num) {
  let nummm = num.toString().split("").map(Number);
  let arr = num.toString().split("");
  let even = [];
  let odd = [];

  for (char of arr) {
    if (Number(char) % 2 == 0) {
      even.push(char);
    } else {
      odd.push(char);
    }
  }
  even = even.sort((a, b) => Number(b) - Number(a));
  odd = odd.sort((a, b) => Number(b) - Number(a));

  for (let i = 0; i < nummm.length; i++) {
    if (nummm[i] % 2 === 0) {
      nummm[i] = even[0];
      even.splice(0, 1);
    }
    if (nummm[i] % 2 !== 0) {
      nummm[i] = odd[0];
      odd.splice(0, 1);
    }
  }

  return Number(nummm.join(""));
};

console.log(largestInteger(1234));
console.log(largestInteger(65875));
