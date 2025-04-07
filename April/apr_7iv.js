// count construct
// write a function that accepts a target string and an array of strings
// the function should return the total number of ways that the target can be constructed by concatenating elements of the wordbank array

const countConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let total_count = 0;
  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const num_ways_for_rest = countConstruct(
        target.slice(word.length),
        wordbank,
        memo
      );
      total_count += num_ways_for_rest;
    }
  }
  memo[target] = total_count;
  return total_count;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
