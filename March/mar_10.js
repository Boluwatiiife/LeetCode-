// 2515. Shortest Distance to Target String in a Circular Array

const closestTarget = function (words, target, startIndex) {
  let n = words.length;
  let min_dist = Infinity;

  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      let for_dist = Math.abs(i - startIndex);
      let back_dist = n - for_dist;
      min_dist = Math.min(for_dist, back_dist, min_dist);
    }
  }
  return min_dist === Infinity ? -1 : min_dist;
};

console.log(
  closestTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 1)
);
console.log(closestTarget(["a", "b", "leetcode"], "leetcode", 0));
console.log(closestTarget(["i", "eat", "leetcode"], "ate", 0));
console.log(
  closestTarget(
    [
      "hsdqinnoha",
      "mqhskgeqzr",
      "zemkwvqrww",
      "zemkwvqrww",
      "daljcrktje",
      "fghofclnwp",
      "djwdworyka",
      "cxfpybanhd",
      "fghofclnwp",
      "fghofclnwp",
    ],
    "zemkwvqrww",
    8
  )
);
