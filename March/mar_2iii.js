// 2138. Divide a String Into Groups of Size k

const divideString = function (s, k, fill) {
  let arr = [];
  let n = s.length;

  for (let i = 0; i < n; i += k) {
    let word = s.substring(i, i + k);
    if (word.length < k) {
      word = word.padEnd(k, fill);
    }
    arr.push(word);
  }

  return arr;
};

console.log(divideString("abcdefghi", 3, "x"));
console.log(divideString("abcdefghij", 3, "x"));
console.log(divideString("boluwillmakemuchriseup", 4, "d"));
