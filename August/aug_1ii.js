// 3238. Find the Number of Winning Players

const winningPlayerCount = function (n, pick) {
  let arr = Array.from({ length: n }, () => []);
  let mapp = Array.from({ length: n }, () => new Map());

  for (const [player, num] of pick) {
    if (!arr[player].includes(num)) arr[player].push(num);
    mapp[player].set(num, (mapp[player].get(num) || 0) + 1);
  }

  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (temp.length === 0) continue;
    for (const x of temp) {
      if (mapp[i].get(x) > i) {
        ans++;
        break;
      }
    }
  }

  return ans;
};

console.log(
  winningPlayerCount(4, [
    [0, 0],
    [1, 0],
    [1, 0],
    [2, 1],
    [2, 1],
    [2, 0],
  ])
);
console.log(
  winningPlayerCount(5, [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);
console.log(
  winningPlayerCount(5, [
    [1, 1],
    [2, 4],
    [2, 4],
    [2, 4],
  ])
);
console.log(
  winningPlayerCount(2, [
    [0, 8],
    [0, 3],
  ])
);
const winningPlayerCountt = function (n, pick) {
  let arr = Array.from({ length: n }, () => Array(11).fill(0));

  for (const [player, ball] of pick) {
    arr[player][ball]++;
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i].some((val) => val > i)) ans++;
  }

  return ans;
};

console.log(
  winningPlayerCountt(4, [
    [0, 0],
    [1, 0],
    [1, 0],
    [2, 1],
    [2, 1],
    [2, 0],
  ])
);
console.log(
  winningPlayerCountt(5, [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);
console.log(
  winningPlayerCountt(5, [
    [1, 1],
    [2, 4],
    [2, 4],
    [2, 4],
  ])
);
console.log(
  winningPlayerCountt(2, [
    [0, 8],
    [0, 3],
  ])
);
console.log(
  winningPlayerCountt(3, [
    [0, 8],
    [0, 3],
    [1, 3],
    [1, 3],
  ])
);
