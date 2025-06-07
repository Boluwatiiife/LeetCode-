// 3170. Lexicographically Minimum String After Removing Stars

const clearStars = function (s) {
  const stack = [];
  const charCount = new Map();

  for (let char of s) {
    if (char === "*") {
      let small = "z";
      for (let ch of charCount.keys()) {
        if (ch < small && charCount.get(ch) > 0) {
          small = ch;
        }
      }

      // remove first occurence of small from stack (leftmost)
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === small) {
          stack.splice(i, 1);
          charCount.set(small, charCount.get(small) - 1);
          break;
        }
      }
    } else {
      stack.push(char);
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  }
  return stack.join("");
};

console.log(clearStars("aaba*"));
console.log(clearStars("abc"));
console.log(clearStars("a*q"));
console.log(clearStars("c*zb"));
console.log(clearStars("d*d*"));
console.log(clearStars("dk**"));
