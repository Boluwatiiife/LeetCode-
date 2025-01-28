// 557. Revers Words in a String III

const reverseWords = function (s) {
  let stringg = s.split(" ");
  for (let i = 0; i < stringg.length; i++) {
    stringg[i] = stringg[i].split("").reverse().join("");
  }
  return stringg.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));
console.log(
  reverseWords("Mr Boluwatife, the best backend developer in Nigeria")
);
console.log(reverseWords("Joy is Coming!"));
