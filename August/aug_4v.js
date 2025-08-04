// 2609. Find the Longest Balanced Substring of a Binary String

const findTheLongestBalancedSubstring = function (s) {
  let temp = "01";

  while (s.includes(temp)) {
    temp = "0" + temp + "1";
  }

  return temp.length - 2;
};

console.log(findTheLongestBalancedSubstring("01000111"));
console.log(findTheLongestBalancedSubstring("00111"));
console.log(findTheLongestBalancedSubstring("111"));
console.log(findTheLongestBalancedSubstring("10"));
console.log(findTheLongestBalancedSubstring("001"));
console.log(findTheLongestBalancedSubstring("01011"));
