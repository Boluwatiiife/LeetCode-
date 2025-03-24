// 2609. Find the Longest Balanced Substring of a Binary String

const findTheLongestBalancedSubstring = function (s) {
  let maxx = 0;
  let arr = s.split("").map(Number);
  let n = arr.length;

  //   let dd = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = arr.slice(i, j + 1);
      if (temp.length % 2 === 0) {
        let nn = temp.length / 2;
        let beff = temp.slice(0, nn);
        let aftt = temp.slice(nn, temp.length);
        // return [beff, aftt];
        if (beff.every((xx) => xx === 0) && aftt.every((xx) => xx === 1)) {
          maxx = Math.max(maxx, temp.length);
        }
      }
    }
  }
  return maxx;
};

console.log(findTheLongestBalancedSubstring("01000111"));
console.log(findTheLongestBalancedSubstring("00111"));
console.log(findTheLongestBalancedSubstring("111"));
console.log(findTheLongestBalancedSubstring("001"));
console.log(findTheLongestBalancedSubstring("0000111"));
