// 2744. Find Maximum Number of String Pairs

const maximumNumberOfStringPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        let xxx = words[i],
          yyy = words[j];
        if (xxx[0] === yyy[1] && xxx[1] === yyy[0]) {
          count++;
        }
      }
    }
  }
  return count / 2;
};

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
console.log(maximumNumberOfStringPairs(["ab", "ba", "cc"]));
console.log(maximumNumberOfStringPairs(["aa", "ab"]));
