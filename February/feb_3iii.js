// 771. Jewels and Stones

const numJewelsInStones = function (jewels, stones) {
  let jewss = jewels.split("");
  let stone = stones.split("");
  let result = 0;
  for (let i = 0; i < stone.length; i++) {
    if (jewss.includes(stone[i])) {
      result += 1;
    }
  }
  return result;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
console.log(numJewelsInStones("sdD", "DDsDdee"));
