// 3803. Count Residue Prefixes

const residuePrefixes = function (s) {
  const n = s.length;
  let arr = [s[0]];
  let dist = 1;
  let ans = 1;

  for (let i = 1; i < n; i++) {
    const temp = s[i];
    if (!arr.includes(temp)) dist++;
    if (dist === (i + 1) % 3) ans++;
    arr.push(temp);
  }

  return ans;
};

console.log(residuePrefixes("abc"));
console.log(residuePrefixes("dd"));
console.log(residuePrefixes("bob"));
