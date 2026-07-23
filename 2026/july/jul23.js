// 3992. Rearrange String to Avoid Character Pair

const rearrangeString = function (s, x, y) {
  if (!s.includes(x)) return s;
  if (!s.includes(y)) return s;
  let freq = new Map();
  for (const no of s) freq.set(no, (freq.get(no) || 0) + 1);
  let ans = y + x;
  for (const no of s) {
    if (no !== x && no !== y) ans += no;
    else {
      if (freq.get(no) > 1) {
        if (no === y) ans = no + ans;
        else ans += no;
      }
      freq.set(no, freq.get(no) - 1);
    }
  }

  return ans;
};

console.log(rearrangeString("aabc", "a", "c"));
console.log(rearrangeString("dcab", "d", "b"));
console.log(rearrangeString("axe", "o", "x"));
console.log(rearrangeString("ls", "l", "m"));
