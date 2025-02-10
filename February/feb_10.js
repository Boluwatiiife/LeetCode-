// 1317. Convert Integer to the Sum of Two No-Zero Integers

const getNoZeroIntegers = function (n) {
  let resultt = [];
  for (let i = 1; i <= n; i++) {
    let a = i.toString();
    let b = (n - i).toString();
    // return [a, b];
    if (a.includes("0") || b.includes("0")) {
      i++;
    } else if (parseInt(a) + parseInt(b) === n) {
      resultt.push(parseInt(a), parseInt(b));
      break;
    }
  }
  return resultt;
};

console.log(getNoZeroIntegers(2));
console.log(getNoZeroIntegers(11));
console.log(getNoZeroIntegers(1010));
console.log(getNoZeroIntegers(27));
console.log(getNoZeroIntegers(22));
