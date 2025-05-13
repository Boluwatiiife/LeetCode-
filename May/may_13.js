// 3335. Total Characters in String After Transformations I

const lengthAfterTransformations = function (s, t) {
  const MOD = 1e9 + 7;
  const count = Array(26).fill(0);

  // count each letter
  for (const ch of s) {
    count[ch.charCodeAt(0) - 97]++;
  }

  // simulate transformations
  for (let step = 0; step < t; step++) {
    const next = Array(26).fill(0);
    for (let i = 0; i < 25; i++) {
      next[i + 1] = count[i];
    }
    next[0] = (next[0] + count[25]) % MOD;
    next[1] = (next[1] + count[25]) % MOD;
    count.splice(0, 26, ...next);
  }

  return count.reduce((a, b) => (a + b) % MOD, 0);
};

console.log(lengthAfterTransformations("abcyy", 2));
console.log(lengthAfterTransformations("azbk", 1));
console.log(lengthAfterTransformations("xxx", 3));
