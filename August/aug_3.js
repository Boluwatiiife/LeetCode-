// 3498. Reverse Degree of a String

const reverseDegree = function (s) {
  const alpha = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(122 - i)
  );

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    ans += (i + 1) * (alpha.indexOf(s[i]) + 1);
  }

  return ans;
};

console.log(reverseDegree("abc"));
console.log(reverseDegree("zaza"));
