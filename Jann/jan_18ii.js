// 3750. Minimum Number of Flips to Reverse Binary String

const minimumFlips = function (n) {
  const one = n.toString(2);
  const two = one.toString().split("").reverse().join("");
  let ans = 0;

  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) ans++;
  }

  return ans;
};

console.log(minimumFlips(7));
console.log(minimumFlips(10));
