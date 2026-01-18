// 3754. Concatenate Non-Zero Digits and Multiply by Sum I

const sumAndMultiply = function (n) {
  const num = n.toString();
  let sum = 0;
  let xx = "";

  for (const no of num) {
    if (no !== "0") {
      xx += no;
      sum += Number(no);
    }
  }

  return Number(xx) * sum;
};

console.log(sumAndMultiply(10203004));
console.log(sumAndMultiply(1000));
