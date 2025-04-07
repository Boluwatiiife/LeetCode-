// can construct
// write a function that accepts a target string and an array of strings
// the function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordbank array

const canConstruct = (target, wordbank, memoo = {}) => {
  if (target in memoo) return memoo[target];
  if (target === "") return true;

  for (let word of wordbank) {
    // if(target.indexOf(word)===0){
    if (target.startsWith(word)) {
      const suffixx = target.slice(word.length);
      if (canConstruct(suffixx, wordbank, memoo) === true) {
        memoo[target] = true;
        return true;
      }
    }
  }
  memoo[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
// console.log(canConstruct("", ["cat", "dog", "mouse"])); // true
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false
