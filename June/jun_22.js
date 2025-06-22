// 3048. Earliest Second to Mark Indices I

const earliestSecondToMarkIndices = function (nums, changeIndices) {
  const n = nums.length;
  const m = changeIndices.length;
  changeIndices = changeIndices.map((dex) => dex - 1);

  let left = 0,
    right = m - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (checkk(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  function checkk(mid) {
    let last = Array(n).fill(-1);
    for (let i = 0; i <= mid; i++) {
      last[changeIndices[i]] = i;
    }
    let marked = 0,
      operations = 0;
    for (let i = 0; i <= mid; i++) {
      if (i === last[changeIndices[i]]) {
        if (nums[changeIndices[i]] > operations) return false;
        operations -= nums[changeIndices[i]];
        marked++;
      } else {
        operations++;
      }
    }
    return marked === n;
  }
  return checkk(left) ? left + 1 : -1;
};

console.log(earliestSecondToMarkIndices([2, 2, 0], [2, 2, 2, 2, 3, 2, 2, 1]));
console.log(earliestSecondToMarkIndices([1, 3], [1, 1, 1, 2, 1, 1, 1]));
console.log(earliestSecondToMarkIndices([0, 1], [2, 2, 2]));
console.log(
  earliestSecondToMarkIndices([0, 2, 3, 0], [2, 4, 1, 3, 3, 3, 3, 3, 3, 2, 1])
);
