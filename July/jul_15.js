// 997. Find the Town Judge

constfindJudge = function (n, trust) {
  const trustScores = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustScores[a]--;
    trustScores[b]++;
  }

  for (let i = 1; i < trustScores.length; i++) {
    if (trustScores[i] === n - 1) return i;
  }

  return -1;
};

console.log(constfindJudge(2, [[1, 2]]));
console.log(
  constfindJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
console.log(
  constfindJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
console.log(
  constfindJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
); // 3
console.log(
  constfindJudge(3, [
    [1, 2],
    [2, 3],
  ]) // -1
);
console.log(
  constfindJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
  ]) // -1
);
