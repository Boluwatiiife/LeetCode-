// 953. Verifying an Alien Dictionary

const isAlienSorted = function (words, order) {
  function isSorted(grid) {
    return grid.sort((a, b) => {
      const len = Math.min(a.length, b.length);
      for (let i = 0; i < len; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return a.length - b.length;
    });
  }
  let nums = [];
  for (const word of words) {
    let dex = [];
    for (const char of word) {
      dex.push(order.indexOf(char));
    }
    nums.push(dex);
  }
  const fixed = [...nums];
  let sort = isSorted(nums);

  for (let i = 0; i < fixed.length; i++) {
    const one = fixed[i].map((xx) => String(xx)).join("");
    const two = sort[i].map((xx) => String(xx)).join("");
    if (one !== two) return false;
  }
  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
