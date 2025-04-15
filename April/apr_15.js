// 1839. Longest Substring Of All Vowels in Order

const longestBeautifulSubstring = function (word) {
  let n = word.length;
  let maxx = 0;
  let left = 0;
  let count = 1;

  for (let right = 1; right < n; right++) {
    if (word[right] < word[right - 1]) {
      if (count === 5) {
        maxx = Math.max(maxx, right - left);
      }
      count = 1;
      left = right;
    } else if (word[right] > word[right - 1]) count++;
  }
  if (count === 5) maxx = Math.max(maxx, n - left);

  return maxx;
};

console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"));
console.log(longestBeautifulSubstring("aeeeiiiioooauuuaeiou"));
console.log(longestBeautifulSubstring("a"));
console.log(
  longestBeautifulSubstring(
    "eauoiouieaaoueiuaieoeauoiaueoiaeoiuieuaoiaeouiaueo"
  )
);
