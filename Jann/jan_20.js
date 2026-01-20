// 3314. Construct the Minimum Bitwise Array I

const minBitwiseArray = function (nums) {
  let ans = [];

  for (const no of nums) {
    let temp = Infinity;
    for (let i = 0; i <= no; i++) {
      if ((i | (i + 1)) === no) {
        temp = Math.min(temp, i);
      }
    }
    ans.push(temp === Infinity ? -1 : temp);
  }

  return ans;
};

console.log(minBitwiseArray([2, 3, 5, 7]));
console.log(minBitwiseArray([11, 13, 31]));

// console.log(0 | 1);
// console.log(1 | 2);
