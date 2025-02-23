// 1768. Merge Strings Alternately

const mergeAlternately = function (word1, word2) {
  let minn = Math.min(word1.length, word2.length);
  let extra = [];
  if (word1.length > minn) {
    for (let i = minn; i < word1.length; i++) {
      extra.push(word1[i]);
    }
  }
  if (word2.length > minn) {
    for (let i = minn; i < word2.length; i++) {
      extra.push(word2[i]);
    }
  }
  let resultt = [];
  for (let i = 0; i < minn; i++) {
    resultt.push(word1[i]);
    resultt.push(word2[i]);
  }
  for (xx of extra) {
    resultt.push(xx);
  }
  return resultt.join("");
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));

// 2 pointer approach

const mergeAlternate = function (word1, word2) {
  let i = 0,
    j = 0;
  let mergedd = "";

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      mergedd += word1[i];
      i++;
    }
    if (j < word2.length) {
      mergedd += word2[j];
      j++;
    }
  }
  return mergedd;
};
console.log(mergeAlternate("abc", "pqr"));
console.log(mergeAlternate("ab", "pqrs"));
console.log(mergeAlternate("abcd", "pq"));
console.log(mergeAlternate("blwtf", "ouaie"));
