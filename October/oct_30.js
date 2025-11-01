// 3692. Majority Frequency Characters

const majorityFrequencyGroup = function (s) {
  let map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let chars = [...map.keys()];
  let grid = Array.from({ length: 101 }, () => []);
  let maxx = 0;

  for (const char of chars) {
    grid[map.get(char)].push(char);
    maxx = Math.max(maxx, grid[map.get(char)].length);
  }

  const temp = grid.filter((arr) => arr.length > 0);

  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i].length === maxx) return temp[i].join("");
  }
};

console.log(majorityFrequencyGroup("aaabbbccdddde"));
console.log(majorityFrequencyGroup("abcd"));
console.log(majorityFrequencyGroup("abcdd"));
console.log(majorityFrequencyGroup("pfpfgi"));
console.log(majorityFrequencyGroup("pfpfgidd"));
console.log(
  majorityFrequencyGroup(
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  )
);
