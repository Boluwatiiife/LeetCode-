// 1684. Count the Number of Consistent Strings

const countConsistentStrings = function (allowed, words) {
  let num = 0;
  for (let i = 0; i < words.length; i++) {
    let arr = words[i].split("");
    for (let i = 0; i < arr.length; i++) {
      if (!allowed.includes(arr[i])) {
        num++;
        break;
      }
    }
  }
  return words.length - num;
};

//>>>>>>>>>

const countConsistentStringss = function (allowed, words) {
  let letters = new Set(allowed);

  let count = 0;

  for (word of words) {
    if ([...word].every((character) => letters.has(character))) {
      count++;
    }
  }
  return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
console.log(
  countConsistentStrings("fstqyienx", [
    "n",
    "eeitfns",
    "eqqqsfs",
    "i",
    "feniqis",
    "lhoa",
    "yqyitei",
    "sqtn",
    "kug",
    "z",
    "neqqis",
  ])
);
