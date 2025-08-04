// 3541. Find Most Frequent Vowel and Consonant

const maxFreqSum = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let mapp = new Map();
  let vv = 0;
  let cc = 0;

  for (const char of s) {
    mapp.set(char, (mapp.get(char) || 0) + 1);
    if (vowels.includes(char)) {
      vv = Math.max(vv, mapp.get(char));
    } else {
      cc = Math.max(cc, mapp.get(char));
    }
  }

  return vv + cc;
};

console.log(maxFreqSum("successes"));
console.log(maxFreqSum("aeiaeia"));
