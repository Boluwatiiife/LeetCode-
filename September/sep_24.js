// 3688. Bitwise OR of Even Numbers in an Array

const evenNumberBitwiseORs = function (nums) {
  let ans = 0;

  for (const no of nums) {
    if (no % 2 === 0) {
      ans |= no;
    }
  }

  return ans;
};

console.log(evenNumberBitwiseORs([1, 2, 3, 4, 5, 6]));
console.log(evenNumberBitwiseORs([7, 9, 11]));
console.log(evenNumberBitwiseORs([1, 8, 16]));
