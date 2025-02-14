// 1374. Generate a String With Characters That Have Odd Counts

const generateTheString = function (n) {
  let resultt = [];
  for (let i = 0; i < n; i++) {
    resultt.push("a");
  }
  if (n % 2 !== 0) {
    return resultt.join("");
  }
  if (n % 2 === 0) {
    resultt.pop();
    resultt.push("b");
  }
  return resultt.join("");
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(6));
console.log(generateTheString(7));

// time efficient solution.
const string_generate = function (n) {
  if (n % 2 !== 0) {
    return "x".repeat(n);
  } else {
    return "x".repeat(n - 1) + "y";
  }
};

console.log(string_generate(4));
console.log(string_generate(2));
console.log(string_generate(6));
console.log(string_generate(7));
