// 3146. Permutation Difference between Two Strings

const findPermutationDifference = function (s, t) {
  let onee = s.split("");
  let twoo = t.split("");

  let sum = 0;
  for (let i = onee.length - 1; i >= 0; i--) {
    for (let j = twoo.length - 1; j >= 0; j--) {
      if (onee[i] === twoo[j]) {
        sum += Math.abs(i - j);
      }
    }
  }
  return sum;
};

console.log(findPermutationDifference("abc", "bac"));
console.log(findPermutationDifference("abcde", "edbac"));
