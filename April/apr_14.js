// 1156. Swap For Longest Repeated Character Substring

const maxRepOpt1 = function (text) {
  const count = new Map();
  for (char of text) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  let max = 0;

  for ([char, total] of count.entries()) {
    let left = 0,
      right = 0;
    let diff = 0;

    while (right < text.length) {
      if (text[right] !== char) diff++;

      while (diff > 1) {
        if (text[left] !== char) diff--;
        left++;
      }

      window_length = right - left + 1;
      max = Math.max(max, Math.min(window_length, total));
      right++;
    }
  }

  return max;
};

console.log(maxRepOpt1("ababa"));
console.log(maxRepOpt1("aaabaaa"));
console.log(maxRepOpt1("aaaaa"));
console.log(maxRepOpt1("aaabaaacccccccbcaaa"));
