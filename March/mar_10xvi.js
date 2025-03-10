// 2586. Count the Number of Vowel Strings in Range

const vowelStrings = function (words, left, right) {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < words.length; i++) {
    if (i >= left && i <= right) {
      let temp = words[i];
      if (vowels.includes(temp[0]) && vowels.includes(temp[temp.length - 1])) {
        count++;
      }
    }
  }
  return count;
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
