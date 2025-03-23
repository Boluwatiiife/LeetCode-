// 3411. Maximum Subarray With Equal Products

const maxLength = function (nums) {
  let maxx = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let temp = nums.slice(i, j + 1);
      let prod = 1;
      for (no of temp) {
        prod *= no;
      }
      function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
      }
      function arr_gcd(arrr) {
        return arrr.reduce((a, b) => gcd(a, b));
      }
      function lcm(a, b) {
        return (a * b) / gcd(a, b);
      }
      function arr_lcm(arrr) {
        return arrr.reduce((a, b) => lcm(a, b), 1);
      }
      let gcdd = arr_gcd(temp);
      let lcmm = arr_lcm(temp);
      if (lcmm * gcdd === prod) {
        maxx = Math.max(maxx, temp.length);
      }
    }
  }
  return maxx;
};

console.log(maxLength([1, 2, 1, 2, 1, 1, 1]));
console.log(maxLength([2, 3, 4, 5, 6]));
console.log(maxLength([1, 2, 3, 1, 4, 5, 1]));
console.log(maxLength([2, 6]));
