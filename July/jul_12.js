// 824. Goat Latin

const toGoatLatin = function (sentence) {
  const wordss = sentence.split(" ");
  let ans = [];
  let vowels = ["a", "e", "i", "o", "u"];

  let add = "maa";

  for (const word of wordss) {
    if (vowels.includes(word[0].toLowerCase())) {
      ans.push(word + add);
      add += "a";
    } else {
      ans.push(word.slice(1, word.length) + word[0] + add);
      add += "a";
    }
  }
  return ans.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin"));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
