// 1963. Minimum Number of Swaps to Make the String Balanced

const minSwaps = function (s) {
  const n = s.length;
  let open = 0;
  let close = 0;
  let swaps = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "[") open++;
    else close++;
    if (close > open) {
      swaps = Math.max(swaps, Math.ceil((close - open) / 2));
    }
  }
  return swaps;
};

console.log(minSwaps("][]["));
console.log(minSwaps("]]][[["));
console.log(minSwaps("[]"));
