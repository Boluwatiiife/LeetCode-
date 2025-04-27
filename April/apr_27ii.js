// 1456. Maximum Number of Vowels in a Substring of Given Length

const maxVowels = function (s, k) {
  let vowels = ["a", "e", "i", "o", "u"];
  let left = 0;
  let maxx = 0;
  let curr = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count++;
    let char = s[i];
    if (vowels.includes(char)) curr++;
    if (count === k) {
      maxx = Math.max(maxx, curr);
      count--;
      if (vowels.includes(s[left])) {
        curr--;
        left++;
      } else {
        left++;
      }
    }
  }

  return maxx;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
