// 1562. Find Latest Group of Size M

const findLatestStep = function (arr, m) {
  const n = arr.length;
  if (n === m) return n;

  const lengthMap = new Array(n + 2).fill(0);
  const countMap = {};
  let ans = -1;

  for (let step = 0; step < n; step++) {
    const i = arr[step];

    const left = lengthMap[i - 1];
    const right = lengthMap[i + 1];
    const newLength = left + 1 + right;

    // decrement previous group sizes
    if (left > 0) countMap[left] = (countMap[left] || 0) - 1;
    if (right > 0) countMap[right] = (countMap[right] || 0) - 1;

    // update new group size count
    countMap[newLength] = (countMap[newLength] || 0) + 1;

    // update boundaries with new group length
    lengthMap[i - left] = newLength;
    lengthMap[i + right] = newLength;

    if (countMap[m] > 0) ans = step + 1;
  }

  return ans;
};

console.log(findLatestStep([3, 5, 1, 2, 4], 1));
console.log(findLatestStep([3, 1, 5, 4, 2], 2));
console.log(findLatestStep([3, 1, 4, 5, 2], 2));
