// 3174. Clear Digits

const clearDigits = function (s) {
  let stack = [];

  for (let char of s) {
    // if (!isNaN(char)) {
    if (/\d/.test(char)) {
      if (stack.length) stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
console.log(clearDigits("dg78r5eee098"));
console.log(clearDigits("cb345"));
console.log(clearDigits("ag3"));
