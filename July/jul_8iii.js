// 717. 1-bit and 2-bit Characters

const isOneBitCharacter = function (bits) {
  let arr = [];

  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 1 && bits[i + 1] === 0) {
      arr.push(2);
      i++;
    } else if (bits[i] === 1 && bits[i + 1] === 1) {
      arr.push(2);
      i++;
    } else {
      arr.push(1);
    }
  }
  return arr[arr.length - 1] === 1 ? true : false;
};

console.log(isOneBitCharacter([1, 0, 0]));
console.log(isOneBitCharacter([1, 1, 1, 0]));
console.log(isOneBitCharacter([0, 0]));
console.log(isOneBitCharacter([0, 1, 0]));
console.log(isOneBitCharacter([1, 1, 0]));
