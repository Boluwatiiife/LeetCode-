/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
*/

const uncommonFromSentences = function (s1, s2) {
  function countWords(sentence) {
    const counts = new Map();
    const words = sentence.split(" ");
    for (const word of words) {
      counts.set(word, (counts.get(word) || 0) + 1);
    }
    return counts;
  }
  const counts1 = countWords(s1);
  const counts2 = countWords(s2);

  const standOutWords = [];

  for (const [word, count] of counts1.entries()) {
    if (count === 1 && !counts2.has(word)) {
      standOutWords.push(word);
    }
  }
  for (const [word, count] of counts2.entries()) {
    if (count === 1 && !counts1.has(word)) {
      standOutWords.push(word);
    }
  }

  return standOutWords;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));
console.log(uncommonFromSentences("", "The quick red fox"));
