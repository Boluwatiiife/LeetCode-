// 2053. Kth Distinct String in an Array

/**
 A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.
 */

let kthDistinct = function (arr, k) {
  let once = "";
  const counts = new Map();

  arr.forEach((element) => {
    counts.set(element, (counts.get(element) || 0) + 1);
  });

  const appeared_once = Array.from(counts.entries())
    .filter(([key, value]) => value === 1)
    .map(([key]) => key);

  for (let i = 0; i < appeared_once.length; i++) {
    if (appeared_once.length < k) {
      once = "";
    }
    if (i === k - 1) {
      once = appeared_once[i];
    }
  }
  console.log(appeared_once);
  return once;
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["a", "b", "a"], 3));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
