// 1898. Maximum Number of Removable Characters

const maximumRemovals = function (s, p, removable) {
  function subseqence(one, two, set) {
    let i = 0;
    let j = 0;

    while (i < one.length && j < two.length) {
      if (!set.has(i) && one[i] === two[j]) {
        j++;
      }
      i++;
    }
    return j === two.length;
  }
  let left = 0;
  let right = removable.length;
  let count = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // build set of indices to be removed
    const removedSet = new Set();
    for (let i = 0; i < mid; i++) {
      removedSet.add(removable[i]);
    }

    if (subseqence(s, p, removedSet)) {
      count = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return count;
};

console.log(maximumRemovals("abcacb", "ab", [3, 1, 0]));
console.log(maximumRemovals("abcbddddd", "abcd", [3, 2, 1, 4, 5, 6]));
console.log(maximumRemovals("abcab", "abc", [0, 1, 2, 3, 4]));
