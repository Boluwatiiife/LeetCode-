// 2490. Circular Sentence

/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

A sentence is circular if:

The last character of each word in the sentence is equal to the first character of its next word.
The last character of the last word is equal to the first character of the first word.
For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

Given a string sentence, return true if it is circular. Otherwise, return false.
*/

const isCircularSentence = function (sentence) {
  let one_word = sentence.split(" ");

  for (let i = 0; i < one_word.length; i++) {
    const word = one_word[i];
    const second_word = one_word[(i + 1) % one_word.length];

    if (word[word.length - 1] !== second_word[0]) {
      return false;
    }
  }
  return true;
};

console.log(isCircularSentence("leetcode exercises sound delightful"));
console.log(isCircularSentence("eetcode"));
console.log(isCircularSentence("Leetcode is cool"));
console.log(
  isCircularSentence(
    "bolu up process syndrome everyday yes sir right till life ends sir rob"
  )
);
