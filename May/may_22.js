// 1813. Sentence Similarity III

const areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === sentence2) return true;
  const one = sentence1.split(" ");
  const two = sentence2.split(" ");
  const n = one.length;
  const m = two.length;
  if (n === m) return false;

  let count = Math.min(n, m);
  let left = 0;
  while (one[left] === two[left]) {
    count--;
    left++;
    if (count === 0) return true;
  }
  let one_right = n - 1;
  let two_right = m - 1;
  while (one[one_right] === two[two_right]) {
    count--;
    one_right--;
    two_right--;
    if (count === 0) return true;
  }
  return false;
};

console.log(areSentencesSimilar("My name is a Haley", "My Haley"));
console.log(areSentencesSimilar("My name is Haley i cook", "My Haley i cook"));
console.log(areSentencesSimilar("of", "A lot of words"));
console.log(areSentencesSimilar("a", "a aa a"));
console.log(areSentencesSimilar("A A AAa", "A AAa"));
console.log(areSentencesSimilar("Luky", "Lucccky"));
console.log(areSentencesSimilar("A", "a A b A"));
console.log(areSentencesSimilar("A A", "A aA"));
console.log(areSentencesSimilar("Eating right now", "Eating"));
console.log(areSentencesSimilar("Eating right", "Eating right"));
console.log(areSentencesSimilar("bb aa aa bb", "aa bb"));
console.log(areSentencesSimilar("right", "Eating right"));
console.log(areSentencesSimilar("A B C D B B", "A B B"));
console.log(
  areSentencesSimilar("i love backend devs", "i love moi backend fuck")
);
