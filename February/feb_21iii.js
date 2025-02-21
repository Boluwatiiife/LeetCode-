// 1668. Maximum Repeating Substring

const maxRepeating = function (sequence, word) {
  let k = 0;
  let repeated_word = word;

  while (sequence.includes(repeated_word)) {
    k++;
    repeated_word += word;
  }
  return k;
};

console.log(maxRepeating("ababc", "ab"));
console.log(maxRepeating("ababc", "ba"));
console.log(maxRepeating("ababc", "ac"));
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));
