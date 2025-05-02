// 2904. Shortest and Lexicographically Smallest Beautiful String

const shortestBeautifulSubstring = function (s, k) {
  let n = s.length;
  let ans = "";

  for (let i = 0; i < n; i++) {
    for (let j = i + k; j <= n; j++) {
      const temp = s.slice(i, j);
      const count = temp.split("").filter((xx) => xx === "1").length;
      if (
        count === k &&
        (ans === "" ||
          j - i < ans.length ||
          (j - i === ans.length && temp < ans))
      ) {
        ans = temp;
      }
    }
  }
  return ans;
};

console.log(shortestBeautifulSubstring("100011001", 3));
console.log(shortestBeautifulSubstring("1011", 2));
console.log(shortestBeautifulSubstring("1011", 2));
console.log(shortestBeautifulSubstring("000", 1));
console.log(shortestBeautifulSubstring("1100100101011001001", 7));
