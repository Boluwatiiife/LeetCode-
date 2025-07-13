// 868. Binary Gap

const binaryGap = function (n) {
  const binary = n.toString(2);
  let dex = binary.indexOf("1");
  let ans = 0;

  for (let i = dex + 1; i < binary.length; i++) {
    if (binary[i] === "1") {
      ans = Math.max(ans, i - dex);
      dex = i;
    }
  }

  return ans;
};

console.log(binaryGap(22));
console.log(binaryGap(8));
console.log(binaryGap(5));
