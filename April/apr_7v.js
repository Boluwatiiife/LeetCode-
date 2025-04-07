// all construct
// write a function that accepts a target string and an array of strings
// the function should return a 2D array containing elements of the wordbank array, each element of the 2D array should represent one combination that constructs the target
// you may reuse elements of wordbank as many times as needed

const allConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffixx = target.slice(word.length);
      const suffix_ways = allConstruct(suffixx, wordbank, memo);
      const target_ways = suffix_ways.map((way) => [word, ...way]);
      result.push(...target_ways);
    }
  }

  memo[target] = result;
  return result;
};

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
); //
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
