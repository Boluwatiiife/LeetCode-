// 1898. Maximum Number of Removable Characters

const maximumRemovals = function (s, p, removable) {
  function checkkk(word, sub, arr, mid) {
    const spread = word.split("");
    for (let i = 0; i <= mid; i++) {
      spread[arr[i]] = "*";
    }
    let neww = spread.filter((xx) => xx !== "*");
    let i = 0;
    let j = 0;
    while (i < neww.length && j < sub.length) {
      if (neww[i] === sub[j]) {
        i++;
        j++;
      } else {
        i++;
      }
    }
    return j === sub.length;
  }
  let left = 0;
  let right = removable.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (checkkk(s, p, removable, mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(maximumRemovals("abcacb", "ab", [3, 1, 0]));
console.log(maximumRemovals("abcbddddd", "abcd", [3, 2, 1, 4, 5, 6]));
console.log(maximumRemovals("abcab", "abc", [0, 1, 2, 3, 4]));
