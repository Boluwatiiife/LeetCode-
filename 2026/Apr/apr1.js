// 3823. Reverse Letters Then Special Characters in a String

const reverseByType = function (s) {
  let letter_num = [];
  let char_num = [];
  let letter = [];
  let char = [];

  const isLowercase = (ch) => /[a-z]/.test(ch);

  for (let i = 0; i < s.length; i++) {
    if (isLowercase(s[i])) {
      letter_num.push(i);
      letter.push(s[i]);
    } else {
      char_num.push(i);
      char.push(s[i]);
    }
  }
  letter.reverse();
  char.reverse();

  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (letter_num.includes(i)) {
      ans += letter[letter_num.indexOf(i)];
    } else if (char_num.includes(i)) {
      ans += char[char_num.indexOf(i)];
    }
  }

  return ans;
};

console.log(reverseByType(")ebc#da@f("));
console.log(reverseByType("z"));
console.log(reverseByType("!@#$%^&*()"));
console.log(reverseByType("abcd@#$"));
