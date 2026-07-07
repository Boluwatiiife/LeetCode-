// Concatenate Non-Zero Digits and Multiply by Sum I

const sumAndMultiply = function (n) {
  let sum = "",
    digit = 0;
  const string = n.toString();

  for (const no of string) {
    if (no !== "0") {
      sum += no;
      digit += Number(no);
    }
  }

  return Number(sum) * digit;
};

console.log(sumAndMultiply(10203004));
console.log(sumAndMultiply(1000));
