// 1281. Subtract the Product and Sum of Digits of an Integer

const subtractProductAndSum = function (n) {
  const numm = n.toString().split("");
  //   return numm;
  let times = 1;
  for (x of numm) {
    times = times * Number(x);
  }
  let summ = numm.reduce((a, b) => Number(a) + Number(b));
  return times - summ;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
