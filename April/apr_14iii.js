// 1234. Replace the Substring for Balanced String

const balancedString = function (s) {
  const n = s.length;
  const target = n / 4;
  const count = { Q: 0, W: 0, E: 0, R: 0 };

  for (let char of s) {
    count[char]++;
  }

  // if already balanced, return 0
  if (Object.values(count).every((cun) => cun === target)) return 0;

  let min_len = n;
  let left = 0;

  // sliding window
  for (let right = 0; right < n; right++) {
    count[s[right]]--;

    while (
      left <= right &&
      count["Q"] <= target &&
      count["W"] <= target &&
      count["E"] <= target &&
      count["R"] <= target
    ) {
      min_len = Math.min(min_len, right - left + 1);
      count[s[left]]++;
      left++;
    }
  }

  return min_len;
};

console.log(balancedString("QWER"));
console.log(balancedString("QQWE"));
console.log(balancedString("QQQW"));
console.log(balancedString("QWERQQEE"));
console.log(balancedString("QQQQ"));
console.log(balancedString("WQWRQQQW"));
console.log(balancedString("WWEQERQWQWWRWWERQWEQ"));
console.log(balancedString("WEEQERQWQWWRWWWRQWEQ"));
