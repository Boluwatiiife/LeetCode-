// 1356. Sort Integers by The Number of 1 Bits

const sortByBits = function (arr) {
  arr = arr.sort((a, b) => a - b);

  let bits = [];
  let temp = [];

  for (num of arr) {
    let fig = num.toString(2).split("");
    let oness = 0;
    for (xx of fig) {
      if (xx === "1") {
        oness++;
      }
    }
    bits.push([num, oness]);
    temp.push(oness);
  }
  bits = bits.reverse();
  let revrr = temp.sort((a, b) => a - b).reverse();

  let resultt = [];
  for (let i = revrr.length - 1; i >= 0; i--) {
    for (let j = bits.length - 1; j >= 0; j--) {
      let arr = bits[j];
      if (revrr[i] === arr[1]) {
        resultt.push(arr[0]);
        bits.splice(j, 1);
      }
    }
  }
  return resultt;
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));

// optimized solution

const bitttSorttt = function (arr) {
  return arr.sort((a, b) => {
    let bit_count_A = a.toString(2).split("1").length - 1;
    let bit_count_B = b.toString(2).split("1").length - 1;
    return bit_count_A - bit_count_B || a - b;
  });
};
console.log(bitttSorttt([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(bitttSorttt([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
