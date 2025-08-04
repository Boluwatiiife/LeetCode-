// 3545. Minimum Deletions for At Most K Distinct Characters

const minDeletion = function (s, k) {
  const mapp = new Map();

  for (const char of s) {
    mapp.set(char, (mapp.get(char) || 0) + 1);
  }

  let nums = [...mapp.values()].sort((a, b) => a - b);
  const dex = nums.length - k;
  let ans = 0;

  for (let i = 0; i < dex; i++) {
    ans += nums[i];
  }

  return ans;
};

console.log(minDeletion("abc", 2));
console.log(minDeletion("aabb", 2));
console.log(minDeletion("yyyzz", 1));
