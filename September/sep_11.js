// 2785. Sort Vowels in a String

const sortVowels = function (s) {
  const vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let sort = [];

  for (const char of s) {
    if (vowel.includes(char)) sort.push(char);
  }
  sort.sort();

  let ans = "";
  let i = 0;
  for (const char of s) {
    if (vowel.includes(char)) {
      ans += sort[i];
      i++;
    } else {
      ans += char;
    }
  }

  return ans;
};

console.log(sortVowels("lEetcOde"));
console.log(sortVowels("lYmpH"));
