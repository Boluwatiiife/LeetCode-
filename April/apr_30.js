// 2516. Take K of Each Character From Left and Right

const takeCharacters = function (s, k) {
  let n = s.length;
  let count = n;
  let a = 0,
    b = 0,
    c = 0;
  let left = 0,
    right = 0;

  let aa = 0,
    bb = 0,
    cc = 0;
  for (char of s) {
    if (char === "a") aa++;
    if (char === "b") bb++;
    if (char === "c") cc++;
  }
  if (aa < k || bb < k || cc < k) return -1;

  while (right < n) {
    if (s[right] === "a") a++;
    if (s[right] === "b") b++;
    if (s[right] === "c") c++;
    right++;

    while (a > aa - k || b > bb - k || c > cc - k) {
      if (s[left] === "a") a--;
      if (s[left] === "b") b--;
      if (s[left] === "c") c--;
      left++;
    }
    count = Math.min(count, n - (right - left));
  }

  return count;
};

console.log(takeCharacters("aabaaaacaabc", 2));
console.log(takeCharacters("a", 1));
