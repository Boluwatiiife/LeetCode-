// 2053. Kth Distinct String in an Array

const kthDistinct = function (arr, k) {
  let count = new Map();

  for (char of arr) {
    count.set(char, (count.has(char) || 0) + 1);
  }
  let letters = [];
  for (ch of arr) {
    if (count.get(ch) === 1) {
      letters.push(ch);
    }
  }

  if (letters.length >= k) return letters[k - 1];
  return "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));
