// 242. Valid Anagram

/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.
 */

const isAnagram = function (s, t) {
  let first_word = s.split("").sort();
  let second_word = t.split("").sort();
  if (first_word.length !== second_word.length) {
    return false;
  }

  return first_word.every((valuee, indexx) => valuee === second_word[indexx]);
};

console.log(isAnagram("anagram", "angaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));

const anagrammmm = function (s, t) {
  if (s.length !== t.length) return false;

  const count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};
console.log(anagrammmm("anagram", "angaram"));
console.log(anagrammmm("rat", "car"));
console.log(anagrammmm("a", "ab"));
