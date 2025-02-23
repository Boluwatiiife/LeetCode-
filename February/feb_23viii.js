// 1816. Truncate Sentence

const truncateSentence = function (s, k) {
  let word = s.split(" ");
  let resultt = [];

  for (let i = 0; i < k; i++) {
    resultt.push(word[i]);
  }
  return resultt.join(" ");
};

console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("What is the solution to this problem", 4));
console.log(truncateSentence("chopper is not a tanuki", 5));
