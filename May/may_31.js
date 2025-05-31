// 3403. Find the Lexicographically Largest String From the Box I

const answerString = function (word, numFriends) {
  if (numFriends === 1) {
    return word;
  }
  const n = word.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    const t = word.slice(i, Math.min(n, i + n - (numFriends - 1)));
    ans = t > ans ? t : ans;
  }
  return ans;
};

console.log(answerString("dbca", 2));
console.log(answerString("gggg", 4));
console.log(answerString("aann", 2));
