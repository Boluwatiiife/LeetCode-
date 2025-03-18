// 3019. Number of Changing Keys

const countKeyChanges = function (s) {
  s = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      count++;
    }
  }
  return count;
};

console.log(countKeyChanges("aAbBcC"));
console.log(countKeyChanges("AaAaAaaA"));
console.log(countKeyChanges("mDVD"));
