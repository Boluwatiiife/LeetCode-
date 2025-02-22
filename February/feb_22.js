// 1704. Determine if String Halves Are Alike

const halvesAreAlike = function (s) {
  let vowelss = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);

  let middle = s.length / 2;

  let first_half = 0;
  let second_half = 0;

  for (let i = 0; i < middle; i++) {
    if (vowelss.has(s[i])) {
      first_half++;
    }
    if (vowelss.has(s[i + middle])) {
      second_half++;
    }
  }

  return first_half === second_half;
};

console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("textbook"));
