// 3281. Maximize Score of Numbers in Ranges

const maxPossibleScore = function (start, d) {
  start.sort((a, b) => a - b);

  let left = 0,
    right = 1e9 + d,
    ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (checkk(mid)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  function checkk(xx) {
    let arr = [start[0]];
    for (let i = 1; i < start.length; i++) {
      const prev = arr[arr.length - 1];
      const minRequired = prev + xx;
      const [star, end] = [start[i], start[i] + d];

      const pick = Math.max(minRequired, star);
      if (pick <= end) {
        arr.push(pick);
      } else return false;
    }
    return true;
  }
  return ans;
};

console.log(maxPossibleScore([6, 0, 3], 2));
console.log(maxPossibleScore([2, 6, 13, 13], 5));
console.log(maxPossibleScore([1000000000, 0], 1000000000));
