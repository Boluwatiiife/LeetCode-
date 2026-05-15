// 917. Reverse Only Letters

const reverseOnlyLetters = function (s) {
  const isAlpha = (char) => {
    return /^[a-zA-Z]$/.test(char);
  };
  let letter = [];
  for (char of s) {
    if (isAlpha(char)) letter.push(char);
  }
  letter.reverse();

  let ans = "";
  for (char of s) {
    if (isAlpha(char)) ans += letter.shift();
    else ans += char;
  }

  return ans;
};

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
