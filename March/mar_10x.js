// 2558. Take Gifts From the Richest Pile

const pickGifts = function (gifts, k) {
  for (let i = 0; i < k; i++) {
    let maxx = Math.max(...gifts);
    let root = Math.floor(Math.sqrt(maxx));
    gifts[gifts.indexOf(maxx)] = root;
  }
  return gifts.reduce((a, b) => a + b);
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
console.log(pickGifts([1, 1, 1, 1], 4));
