// 461. Hamming Distance

const hammingDistance = function (x, y) {
  let one = x.toString(2),
    two = y.toString(2);
  let diff = Math.abs(one.length - two.length);
  if (one.length > two.length) two = "0".repeat(diff) + two;
  if (one.length < two.length) one = "0".repeat(diff) + one;

  let ans = 0;
  for (let i = 0; i < one.length; i++) if (one[i] !== two[i]) ans++;

  return ans;
};

console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
