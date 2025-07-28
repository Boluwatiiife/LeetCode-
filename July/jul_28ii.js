// 2062. Count Vowel Substrings of a String

const countVowelSubstrings = function (word) {
  let mapp = new Map();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  let left = 0,
    right = 0;
  while (left < word.length) {
    const temp = word[right];
    if (vowels.includes(temp)) {
      right++;
      mapp.set(temp, (mapp.get(temp) || 0) + 1);
      if ([...mapp.keys()].length === 5) {
        count++;
      }
    } else {
      mapp = new Map();
      left++;
      right = left;
    }
  }
  return count;
};

console.log(countVowelSubstrings("aeiouu"));
console.log(countVowelSubstrings("unicornarihan"));
console.log(countVowelSubstrings("cuaieuouac"));
