// 3856. Trim Trailing Vowels

const trimTrailingVowels = function (s) {
  const vowel = ["a", "e", "i", "o", "u"];

  for (let i = s.length - 1; i >= 0; i--) {
    if (!vowel.includes(s[i]))
      return s
        .split("")
        .splice(0, i + 1)
        .join("");
  }

  return "";
};

console.log(trimTrailingVowels("idea"));
console.log(trimTrailingVowels("day"));
console.log(trimTrailingVowels("aeiou"));
