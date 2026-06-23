// 3950. Exactly One Consecutive Set Bits Pair

const consecutiveSetBits = function (n) {
  const num = n.toString(2);
  let one = 0;

  let dex = 0;
  for (let i = 1; i < num.length; i++) {
    if (num[i] === "1" && num[dex] === "1") one++;
    dex++;
  }

  return one === 1 ? true : false;
};

console.log(consecutiveSetBits(6));
console.log(consecutiveSetBits(5));
console.log(consecutiveSetBits(12));
console.log(consecutiveSetBits(37));
