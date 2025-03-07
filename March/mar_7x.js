// 2379. Minimum Recolors to Get K Consecutive Black Blocks

const minimumRecolors = function (blocks, k) {
  let curr = 0;
  let maxx = 0;
  for (char of blocks) {
    if (char === "B") {
      curr++;
    } else {
      maxx = Math.max(curr, maxx);
      curr = 0;
    }
    maxx = Math.max(curr, maxx);
  }
  if (maxx > k) return 0;
  let words = blocks.split("");

  let nums = [];
  for (let i = 0; i <= words.length - k; i++) {
    let arr = [];
    for (let x = i; x < i + k; x++) {
      arr.push(words[x]);
    }
    let ww = 0;
    for (char of arr) {
      if (char === "W") {
        ww++;
      }
    }
    nums.push(ww);
  }

  return Math.min(...nums);
};

console.log(minimumRecolors("WBBWWBBWBW", 7));
console.log(minimumRecolors("WBWBBBW", 2));
console.log(minimumRecolors("WBB", 1));
console.log(minimumRecolors("WBBWWWWBBWWBBBBWWBBWWBBBWWBBBWWWBWBWW", 15));
