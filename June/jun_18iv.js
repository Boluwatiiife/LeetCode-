// 2555. Maximize Win From Two Segments

const maximizeWin = function (prizePositions, k) {
  const n = prizePositions.length;
  let maxFromLeft = [];
  let j = 0;
  for (let i = 0; i < n; i++) {
    while (prizePositions[j] - prizePositions[i] <= k) j++;
    maxFromLeft.push(j - i);
  }

  const rightMax = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    rightMax[i] = Math.max(maxFromLeft[i], rightMax[i + 1]);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    let end = prizePositions[i] + k;
    let left = 0;
    let right = n;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (prizePositions[mid] > end) right = mid;
      else left = mid + 1;
    }
    ans = Math.max(ans, maxFromLeft[i] + rightMax[left]);
  }

  return ans;
};

console.log(maximizeWin([1, 1, 2, 2, 3, 3, 5], 2));
console.log(maximizeWin([1, 2, 3, 4], 0));
