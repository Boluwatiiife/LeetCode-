// 1046. Last Stone Weight

const lastStoneWeight = function (stones) {
  for (let i = stones.length - 1; i >= 0; i--) {
    sortedd = stones.sort((a, b) => a - b);

    if (sortedd.length < 2) return sortedd[0];

    let minus = sortedd[i] - sortedd[i - 1];

    sortedd.splice(i, 1);
    sortedd.splice(i - 1, 1);
    sortedd.push(minus);
  }
  return sortedd;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([3]));
console.log(lastStoneWeight([3, 6, 7, 8, 1, 7, 4]));
