// 1640. Check Array Formation Through Concatenation

const canFormArray = function (arr, pieces) {
  function isSame(one, two) {
    for (let i = 0; i < one.length; i++) {
      if (one[i] !== two[i]) return false;
    }
    return true;
  }

  let ans = [];
  let dex = 0;

  while (pieces.length > 0) {
    const bool = pieces.some((a) => a.includes(arr[dex]));
    if (!bool) return false;

    for (let i = 0; i < pieces.length; i++) {
      const temp = pieces[i];
      if (temp.includes(arr[dex])) {
        ans.push(...temp);
        pieces.splice(i, 1);
        dex += temp.length;
      }
    }
  }

  return isSame(arr, ans);
};

console.log(canFormArray([15, 88], [[88], [15]]));
console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
console.log(canFormArray([1, 3, 5, 7], [[2, 4, 6, 8]]));
console.log(
  canFormArray(
    [100, 2, 98, 28, 44, 55, 37],
    [
      [28, 46, 57],
      [37, 19, 40, 38],
    ]
  )
);
console.log(canFormArray([1, 2, 3], [[2], [1, 3]]));
console.log(canFormArray([2, 82, 79, 95, 28], [[2], [82], [28], [79, 95]]));
