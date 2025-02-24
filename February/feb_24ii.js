// 1863. Sum of All Subset XOR Totals

const subsetXORSum = function (nums) {
  let resultt = [];
  let n = nums.length;

  for (let i = 0; i < 1 << n; i++) {
    let subsett = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subsett.push(nums[j]);
      }
    }

    resultt.push(subsett);
  }

  let arr = [];

  for (temp of resultt) {
    let xorr = temp[0];
    for (let i = 1; i < temp.length; i++) {
      xorr = xorr ^ temp[i];
    }
    arr.push(xorr);
  }
  let final = arr.filter((xx) => xx !== undefined);
  return final.reduce((a, b) => a + b);
};

console.log(subsetXORSum([1, 3]));
console.log(subsetXORSum([5, 1, 6]));
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
console.log(subsetXORSum([3, 4, 5, 6, 7, 8, 4, 4, 4, 44]));
