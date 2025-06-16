// 2498. Frog Jump II

const maxJump = function (stones) {
  function isPossible(mid) {
    const n = stones.length;
    let check = new Array(n).fill(false);

    // forward path
    let i = 0;
    while (i < n - 1) {
      let next = i + 1;
      // jump to furthest reachable stone <= mid
      while (next < n && stones[next] - stones[i] <= mid) {
        next++;
      }
      next--;
      if (next === i) return false;
      check[next] = true;
      i = next;
    }
    // backward path
    i = n - 1;
    while (i > 0) {
      let prev = i - 1;
      while (prev >= 0 && (check[prev] || stones[i] - stones[prev] > mid)) {
        prev--;
      }
      if (prev < 0) return false;
      i = prev;
    }
    return true;
  }
  const n = stones.length;
  let left = 1;
  let right = stones[n - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};

console.log(maxJump([0, 2, 5, 6, 7])); //5
console.log(maxJump([0, 3, 9])); //9
